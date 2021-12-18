import { useState } from "react";
import { Row, Col, Form, FloatingLabel, Button } from "react-bootstrap";

export default function TimelinePhases(props) {
  const { projectName, setProjectName, projectPhases, setProjectPhases } =
    props;

  const [phaseDescription, setPhaseDescription] = useState("");
  const [phaseDate, setPhaseDate] = useState("");

  return (
    <Form className="mb-5">
      <h6 className="mb-3">Completion Date</h6>
      <Row className="mb-3">
        <Form.Group controlId="formstartdate">
          <Form.Control
            type="date"
            value={phaseDate}
            onChange={(e) => {
              setPhaseDate(e.target.value);
            }}
          />
        </Form.Group>
      </Row>
      <h6 className="mb-3">Phase Description</h6>
      <Row className="mb-3">
        <FloatingLabel controlId="floatingTextarea2" label="Comments">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
            value={phaseDescription}
            onChange={(e) => {
              setPhaseDescription(e.target.value);
            }}
          />
        </FloatingLabel>
      </Row>
      <Row>
        <Button
          variant="primary"
          className="text-white"
          onClick={(e) => {
            setProjectPhases([...projectPhases, {
              description: phaseDescription,
              date: phaseDate,
            }]);
          }}
        >
          Add Phase
        </Button>
      </Row>
    </Form>
  );
}
