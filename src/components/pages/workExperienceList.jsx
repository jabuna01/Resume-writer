import {
  Row,
  Col,
  Form,
  Button,
  ButtonGroup,
  ButtonToolbar,
} from "react-bootstrap";
export default function WorkExperienceList({ obj }) {
  return (
    <Form className="form-wrapper"
    //  key={index}
     >
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
  );
}
