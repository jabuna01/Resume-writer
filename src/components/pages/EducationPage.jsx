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

export default function EducationPage() {
  const [form, addForm] = useState([]);
  const [education, setEducation] = useState([]);

  const handleAddEducation = (e) => {
    const element = form.length + 1;
    addForm([...form, element]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSetEducation = (e) => {};

  return (
    <>
      <div className="content-wrapper content">
        <SideNav />

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
          <Button variant="info" onClick={handleAddEducation}>
            + Add Educations
          </Button>
          {form.map((index) => (
            <Form className="form-wrapper" key={index}>
              <Row>
                <Col md={6}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>College or University Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter College or university"
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
                    <Form.Label>Course Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your Course Title"
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
                      placeholder="Enter your Course Description"
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
