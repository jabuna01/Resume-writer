import React, { useState } from "react";
import {
  Row,
  Col,
  Form,
  Button,
  ButtonGroup,
  ButtonToolbar,
} from "react-bootstrap";
import SideNav from "../reusables/SideNav";

export default function SkillsPage() {
  const [form, addForm] = useState([]);

  const handleAddSkills = (e) => {
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
              <h3>Skills</h3>
              <p className="sub-text">Update your Skills details.</p>
            </div>
            <Button variant="secondary" disabled>
              {" "}
              Save and Continue
            </Button>
          </div>
          <Button variant="info" onClick={handleAddSkills}>
            + Add Skills
          </Button>
          {form.map((index) => (
            <Form className="form-wrapper" key={index}>
              <Row>
                <Col md={6}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Skills Discription</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
              </Row>
              <div className="tab-title-block">
                <div></div>
                <ButtonToolbar>
                  <ButtonGroup className="m-2">
                    <Button variant="secondary"> Add</Button>
                  </ButtonGroup>
                  <ButtonGroup className="m-2">
                    <Button variant="secondary"> Remove</Button>
                  </ButtonGroup>
                </ButtonToolbar>
              </div>
            </Form>
          ))}
        </div>
      </div>
    </>
  );
}
