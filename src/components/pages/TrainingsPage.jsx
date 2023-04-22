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

export default function TrainingPage() {
  const [form, addForm] = useState([]);
  const [training, setTraining] = useState([]);

  const handleAddTraining = (e) => {
    const element = form.length + 1;
    addForm([...form, element]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSetTraining = (e) => {};

  return (
    <>
      <div className="content-wrapper content">
        <SideNav />

        <div className="main-content">
          <div className="tab-title-block">
            <div>
              <h3>Trainings</h3>
              <p className="sub-text">Update your training details.</p>
            </div>
            <Button variant="secondary" disabled>
              {" "}
              Save and Continue
            </Button>
          </div>
          <Button variant="info" className="mb-3" onClick={handleAddTraining}>
            + Add Trainings
          </Button>
          {form.map((index) => (
            <Form className="form-wrapper" key={index}>
              <Row>
                <Col md={12}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Training Title</Form.Label>
                    <Form.Control
                      type="text"
                      name="title"
                      placeholder="Enter Training Title"
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
