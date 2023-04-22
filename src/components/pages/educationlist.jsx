import {
  Row,
  Col,
  Form,
  Button,
  ButtonGroup,
  ButtonToolbar,
} from "react-bootstrap";

export default function EducationList({obj}) {
  return (
    <Form
      className="form-wrapper"
      // key={index}
      // id={index}
      // onSubmit={(e) => handleAdd(e, index)}
    >
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>College or University Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter College or university"
              name="university_name"
              value={obj.university_name}
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
            <Form.Label>Course Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Course Title"
              name="degree"
              value={obj.degree}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>End Year</Form.Label>
            <Form.Control
              type="text"
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
              placeholder="Enter your Course Description"
              name="description"
              value={obj.description}
            />
          </Form.Group>
        </Col>
      </Row>
      <div className="tab-title-block">
        <div></div>
        {/* <ButtonToolbar>
          <ButtonGroup className="m-2">
            <Button variant="secondary" type="submit">
              {" "}
              Add
            </Button>
          </ButtonGroup>
          <ButtonGroup className="m-2">
            <Button variant="secondary">
              {" "}
              Remove
            </Button>
          </ButtonGroup>
        </ButtonToolbar> */}
      </div>
    </Form>
  );
}
