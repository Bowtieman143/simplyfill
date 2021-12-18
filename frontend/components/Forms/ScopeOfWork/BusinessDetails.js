import { Row, Col, Form } from "react-bootstrap";

export default function BusinessDetails(props) {
  const {
    projectName,
    setProjectName,
    businessName,
    setBusinessName,
    businessAddress,
    setBusinessAddress,
    services,
    selectedServices,
    setSelectedServices,
  } = props;

  return (
    <Form className="mb-5">
      <h6 className="mb-3">Business Details</h6>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formprojectname">
          <Form.Control
            type="text"
            placeholder="Project Name"
            value={projectName}
            onChange={(e) => {
              setProjectName(e.target.value);
            }}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formbusinessname">
          <Form.Control
            type="text"
            placeholder="Company Name"
            value={businessName}
            onChange={(e) => {
              setBusinessName(e.target.value);
            }}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Control
            type="text"
            placeholder="Company Address"
            value={businessAddress}
            onChange={(e) => {
              setBusinessAddress(e.target.value);
            }}
          />
        </Form.Group>
      </Row>
    </Form>
  );
}
