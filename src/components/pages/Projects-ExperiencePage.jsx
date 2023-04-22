import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import SideNav from "../reusables/SideNav";
import { useNavigate } from "react-router-dom";
import { updateProjectsExperience } from "../reducers/apiResponseReducer";
import { useDispatch, useSelector } from "react-redux";

export default function ProjecstExperiencePage() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector(
    (state) => state.apiResponse?.response?.project_experience
  );
  const [form, addForm] = useState([]);

  const [formData, setFormData] = useState({
    index: -1,
    project_name: "",
    tool_used: "",
    project_description: "",
  });

  const handleAddProjectExperience = (e) => {
    const element = form.length + 1;
    addForm([...form, element]);
  };
  const handleComplete = (e) => {
    history("/certifications-screen");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let list = [...data, formData];
    dispatch(updateProjectsExperience(list));
    setFormData({
      index: -1,
      project_name: "",
      tool_used: "",
      project_description: "",
    });
  };

  console.log(data);
  return (
    <>
      <div className="content-wrapper content">
        <div className="main-content">
          <div className="tab-title-block">
            <div>
              <h3>Project Experience</h3>
              <p className="sub-text">
                Update your Project Experience details.
              </p>
            </div>
            <Button
              variant="secondary"
              onClick={handleComplete}
              disabled={data.length === 0}
            >
              {" "}
              Save and Continue
            </Button>
          </div>
          <div>
            {data.map((project) => (
              <div>{project.project_name}</div>
            ))}
          </div>
          <Button
            className="my-4"
            variant="info"
            onClick={handleAddProjectExperience}
          >
            + Add Projects
          </Button>
          {form.map((index) => (
            <Form className="my-5 form-wrapper" key={index}>
              <Row>
                <Col md={6}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Project Title</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.project_name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          project_name: e.target.value,
                        })
                      }
                    />
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
                      value={formData.tool_used}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          tool_used: e.target.value,
                        })
                      }
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
                      value={formData.project_description}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          project_description: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
              <div className="tab-title-block">
                <div></div>
                <Button variant="secondary" onClick={handleSubmit}>
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
