import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

const Upload = () => {
  return (
    <>
      <Row className="login">
        <Col md={6} className="brand-wrapper">
          <div>
            <div className="brand mb-4">
              <img src="/logo big.svg" alt="Resume-Writer" />
            </div>
            <h4 className="text-white">
              Craft the perfect resume with ease that provides personalized guidance and professional models.
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
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
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
};

export default Upload;
