import SideNav from "../reusables/SideNav";
import {
  Row,
  Col,
  Form,
  Button,
  ButtonGroup,
  ButtonToolbar,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { useState } from "react";
import WorkExperienceList from "./workExperienceList";
export default function WorkExperiencePage() {
  // const [form, addForm] = useState([]);
  const [work_experience, setWorkexperience] = useState([]);
  const form = useSelector(
    (state) => state.apiResponse.response.work_experience
  );

  // const handleAddWorkexperience = (e) => {
  //   const element = form.length + 1;
  //   addForm([...form, element]);
  // };

   const handleSubmit = (e) => {
    e.preventDefault();
    console.log(work_experience,"hello");
  };

  // const handleSetWorkexperience = (e) => {};
  // const displayData = (data) => {
  //   let work = [];
  //   for (let obj of data) {
  //     work.push(<WorkExperienceList obj={obj} />);
  //   }
  //   return work;
  // };

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
            <Button variant="secondary" onClick={handleSubmit}>
              {" "}
              Save and Continue
            </Button>
          </div>

          {form.map((obj) => (
            <Form
              className="form-wrapper"
              //  key={index}
            >
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
                      name="job_title"
                      value={obj.job_title}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Start Year</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Start Year"
                      name="start_date"
                      value={obj.start_date}
                    />
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
                      name="company"
                      value={obj.company}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>End Year</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter End Year"
                      name="end_date"
                      value={obj.end_date}
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
                      placeholder="Enter your Job Description"
                      name="descriptions"
                      value={obj.descriptions}
                    />
                  </Form.Group>
                </Col>
              </Row>
              {/* <div className="tab-title-block">
                <div></div>
                <ButtonToolbar>
                  <ButtonGroup className="m-2">
                    <Button variant="secondary"> Add</Button>
                  </ButtonGroup>
                  <ButtonGroup className="m-2">
                    <Button variant="secondary"> Remove</Button>
                  </ButtonGroup>
                </ButtonToolbar>
              </div> */}
            </Form>
          ))}
        </div>
      </div>
    </>
  );
}
