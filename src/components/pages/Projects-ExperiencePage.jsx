import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import SideNav from "../reusables/SideNav";
import { useSelector } from "react-redux";

export default function ProjecstExperiencePage() {
  // const [form, addForm] = useState([]);

  const form = useSelector(
    (state) => state.apiResponse.response.project_experience
  );

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
        <SideNav activeNav={2}/>
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
          {/* <Button variant="info" onClick={handleAddProjectExperience}>
            + Add Projects
          </Button> */}
          {form.map((data, index) => (
            <Form className="form-wrapper" key={index}>
              <Row>
                <Col md={6}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Project Title</Form.Label>
                    <Form.Control type="text" value={data.project_name} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Tool Used</Form.Label>
                    <ul>{/* {data.tools_technologies.map()} */}</ul>
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
                {/* <Button variant="secondary" disabled>
                  {" "}
                  Add
                </Button> */}
              </div>
            </Form>
          ))}
        </div>
      </div>
    </>
  );
}
