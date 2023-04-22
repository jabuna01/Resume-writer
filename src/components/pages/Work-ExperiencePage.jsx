import SideNav from "../reusables/SideNav";
import {
  Row,
  Col,
  Form,
  Button,
  ButtonGroup,
  ButtonToolbar,
} from "react-bootstrap";
import { useState } from "react";

export default function WorkExperiencePage() {
  const [form, addForm] = useState([]);
  const [workexperience, setWorkexperience] = useState([]);

  const handleAddWorkexperience = (e) => {
    const element = form.length + 1;
    addForm([...form, element]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSetWorkexperience = (e) => {};

  return (
    <>
      <div className="content-wrapper content">
        <SideNav />

        <div className="main-content">
          <div className="tab-title-block">
            <div>
              <h3>Work Experiences</h3>
              <p className="sub-text">Update your Work Experience Details</p>
            </div>
            <Button variant="secondary" disabled>
              {" "}
              Save and Continue
            </Button>
          </div>
          <Button variant="info" onClick={handleAddWorkexperience}>
            + Add Experience
          </Button>
          {form.map((index) => (
            <Form className="form-wrapper" key={index}>
              <Row>
                <Col md={6}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Job title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Job title"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Start Year</Form.Label>
                    <Form.Control type="text" placeholder="Enter Start Year" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your Company Name"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>End Year</Form.Label>
                    <Form.Control type="email" placeholder="Enter End Year" />
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
                      placeholder="Enter your Job Description"
                    />
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
