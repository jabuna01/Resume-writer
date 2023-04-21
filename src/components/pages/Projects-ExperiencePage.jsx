import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const AddProjectForm = () => {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

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
                <div className="label">Project</div>
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
              <h3>Educations</h3>
              <p className="sub-text">Update your educational details.</p>
            </div>
            <Button variant="secondary" disabled>
              {" "}
              Save and Continue
            </Button>
          </div>
          <Button variant="info" onClick={() => setShowForm(true)}>
            + Add Educations
          </Button>
          {showForm && (
            <Form className="form-wrapper">
              <Row>
                <Col md={6}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Project Title</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Tool Used</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Text"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Enter your Project Description"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <div className="tab-title-block">
                <div></div>
                <Button variant="secondary" disabled>
                  {" "}
                  Add
                </Button>
              </div>
            </Form>
          )}
        </div>
      </div>
    </>
  );
};

export default AddProjectForm;
