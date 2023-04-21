import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const Landing = () => {
  return (
    <>
      <div className="content-wrapper content">
        <div className="sider">
          <div className="sider-top">
            <img src="/logo small.svg" alt="brand" />
          </div>
          <div className="line" />
          <div className="sider-content">
            <ul className="tabs">
              <li className="tabs-item active">
                <div className="icon">
                  <div className="bullet">
                    <img src="/bullet.svg" alt="bullet" />
                  </div>
                  <div className="user">
                    <img src="/user.svg" alt="user-icon" />
                  </div>
                </div>
                <div className="label">Personal Information</div>
              </li>
              <li className="tabs-item">
                <div className="icon">
                  <div className="bullet">
                    <img src="/bullet.svg" alt="bullet" />
                  </div>
                  <div className="user">
                    <img src="/user.svg" alt="user-icon" />
                  </div>
                </div>
                <div className="label">Personal Statement</div>
              </li>
              <li className="tabs-item">
                <div className="icon">
                  <div className="bullet">
                    <img src="/bullet.svg" alt="bullet" />
                  </div>
                  <div className="user">
                    <img src="/user.svg" alt="user-icon" />
                  </div>
                </div>
                <div className="label">Projects Expereince</div>
              </li>
              <li className="tabs-item">
                <div className="icon">
                  <div className="bullet">
                    <img src="/bullet.svg" alt="bullet" />
                  </div>
                  <div className="user">
                    <img src="/user.svg" alt="user-icon" />
                  </div>
                </div>
                <div className="label">Certifications</div>
              </li>
              <li className="tabs-item">
                <div className="icon">
                  <div className="bullet">
                    <img src="/bullet.svg" alt="bullet" />
                  </div>
                  <div className="user">
                    <img src="/user.svg" alt="user-icon" />
                  </div>
                </div>
                <div className="label">Work Expereince</div>
              </li>
              <li className="tabs-item">
                <div className="icon">
                  <div className="bullet">
                    <img src="/bullet.svg" alt="bullet" />
                  </div>
                  <div className="user">
                    <img src="/user.svg" alt="user-icon" />
                  </div>
                </div>
                <div className="label">Skills</div>
              </li>
              <li className="tabs-item">
                <div className="icon">
                  <div className="bullet">
                    <img src="/bullet.svg" alt="bullet" />
                  </div>
                  <div className="user">
                    <img src="/user.svg" alt="user-icon" />
                  </div>
                </div>
                <div className="label">Trannings</div>
              </li>
              <li className="tabs-item">
                <div className="icon">
                  <div className="bullet">
                    <img src="/bullet.svg" alt="bullet" />
                  </div>
                  <div className="user">
                    <img src="/user.svg" alt="user-icon" />
                  </div>
                </div>
                <div className="label">Education</div>
              </li>
            </ul>
            <div className="user-profile">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                class="rounded-circle"
                style={{ width: "36px" }}
                alt="Avatar"
              />
              <div className="name">Fatimah Camacho</div>
            </div>
          </div>
        </div>
        <div className="main-content">
          <div className="tab-title-block">
            <div>
              <h3>Personal Information</h3>
              <p className="sub-text">
                This information will be placed at the top of your resume.
              </p>
            </div>
            <Button variant="secondary" disabled>
              {" "}
              Save and Continue
            </Button>
          </div>
          <Form className="form-wrapper">
            <Row>
              <Col md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your First Name"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Role</Form.Label>
                  <Form.Control type="text" placeholder="Enter your Role" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control type="number" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Github Profile Link</Form.Label>
                  <Form.Control
                    type="link"
                    placeholder="Paste your Github Profile Link"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your Last Name"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your Role" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control type="number" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Github Profile Link</Form.Label>
                  <Form.Control
                    type="link"
                    placeholder="Paste your Github Profile Link"
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Landing;
