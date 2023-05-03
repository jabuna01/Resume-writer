import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import SideNav from "../reusables/SideNav";

export default function ProjecstExperiencePage() {
  const [form, addForm] = useState([]);

  const handleAddProjectExperience = (e) => {
    const element = form.length + 1;
    addForm([...form, element]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="content-wrapper content">
        <SideNav />
        <div className="main-content">
          <div className="tab-title-block">
            <div>
              <h3>Project Experience</h3>
              <p className="sub-text">
                Update your Project Experience details.
              </p>
            </div>
            <Button variant="secondary" disabled>
              {" "}
              Save and Continue
            </Button>
          </div>
          <Button
            variant="info"
            className="mb-3"
            onClick={handleAddProjectExperience}
          >
            + Add Projects
          </Button>
          {form.map((index) => (
            <Form className="form-wrapper border-block" key={index}>
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
                    <Form.Control type="text" placeholder="Text" />
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
          ))}
        </div>
      </div>
    </>
  );
}
