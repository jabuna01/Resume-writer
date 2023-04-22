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
import { useSelector } from "react-redux";

export default function CertificationPage() {
  const form = useSelector(
    (state) => state?.apiResponse?.response?.certifications ?? []
  );

  const handleAddCertification = (e) => {
    const element = form.length + 1;
    addForm([...form, element]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSetCertification = (e) => {};

  return (
    <>
      <div className="content-wrapper content">
        <div className="main-content">
          <div className="tab-title-block">
            <div>
              <h3>Certifications</h3>
              <p className="sub-text">Update your certification details.</p>
            </div>
            <Button variant="secondary" disabled>
              {" "}
              Save and Continue
            </Button>
          </div>
          <Button variant="info" onClick={handleAddCertification}>
            + Add Certifications
          </Button>
          {form.map((data, index) => (
            <Form className="form-wrapper" key={index}>
              <Row>
                <Col md={12}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Certificate Title</Form.Label>
                    <Form.Control
                      type="text"
                      name="certification_name"
                      placeholder="Enter Certificate Title"
                      value={data.certification_name}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Certificate Course Link</Form.Label>
                    <Form.Control
                      type="text"
                      name="certification_link"
                      placeholder="Enter Certificate link"
                      value={data.certification_link}
                    />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Certification Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="certification_description"
                      placeholder="Enter your Certificate Description"
                      value={data.certification_description}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <div className="tab-title-block">
                <div></div>
                {/* <ButtonToolbar>
                  <ButtonGroup className="m-2">
                    <Button variant="secondary"> Add</Button>
                  </ButtonGroup>
                  <ButtonGroup className="m-2">
                    <Button variant="secondary"> Remove</Button>
                  </ButtonGroup>
                </ButtonToolbar> */}
              </div>
            </Form>
          ))}
        </div>
      </div>
    </>
  );
}
