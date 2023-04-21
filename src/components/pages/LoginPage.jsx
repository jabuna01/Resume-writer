import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { serverUri } from "../../configs/config";
import { setToken } from "../../services/authentication.service";
import { Navigate, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const handleUserNameCHange = (e) => {
    setUserName(e.target.value);
    // console.log(userName);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // console.log(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userName === "" && password === "") {
      return;
    } else {
      axios
        .post(serverUri + "/api-token-auth/", {
          username: userName,
          password: password,
        })
        .then((response) => {
          console.log(response);
          setToken(response?.data?.token);
          history("/landing-screen");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <Row className="login">
        <Col md={6} className="brand-wrapper">
          <div>
            <div className="brand mb-4">
              <img src="/logo big.svg" alt="Resume-Writer" />
            </div>
            <h4 className="text-white">
              Craft the perfect resume with ease that provides personalized
              guidance and professional models.
            </h4>
          </div>
          <div className="artboard">
            <img src="/resume artboard.svg" alt="Resume-Writer" />
          </div>
        </Col>
        <Col md={6} className="login-form">
          <div>
            <h1>User Login</h1>
            <div className="text-muted mb-4">Login to make your resume</div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Enter Username"
                  onChange={handleUserNameCHange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={handlePasswordChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Login
              </Button>
              <div className="divider">
                <h6 className="text-muted">OR</h6>
              </div>
              <div className="google">
                <div className="google-icon">
                  <img src="/google-icon.svg" alt="svg" />
                </div>
                Sign in with Google
              </div>
            </Form>
          </div>
        </Col>
      </Row>
      <div className="bottom" />
    </>
  );
}
