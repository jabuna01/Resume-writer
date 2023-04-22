import {
    Row,
    Col,
    Form,
    Button,
    ButtonGroup,
    ButtonToolbar,
} from "react-bootstrap";

export default function TrainingList({ obj }) {
    return (
        <Form className="form-wrapper"
        // key={index}
        >
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
                            value = {obj.title}
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
    );
}
