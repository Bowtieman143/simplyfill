import { Col, Form, Row, Button } from "react-bootstrap";

export default function Sidebar(props) {
  const {
    businessName,
    setBusinessName,
    businessAddress,
    setBusinessAddress,
    services,
    setServices,
    selectedServices,
    setSelectedServices
  } = props;

  return (
    <Col md={3} id="sidebar" className="bg-dark text-light h-100 p-4">
      <h3 className="mb-5">1. IDENTIFICATION OF THE PARTIES</h3>
      <Form className="mb-5">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
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
        <Row className="mb-9">
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
        <Row className="my-9">
          <Form.Group className="my-4" controlId="formBasicCheckbox">
            {services.map((service) => (
              <Form.Check
                type="checkbox"
                id={`service-${service}`}
                label={service}
                key={service}
                onChange={(e) => {
                  if (e.target.checked === true) {
                    setSelectedServices([...selectedServices, service]);
                  } else {
                    setSelectedServices(selectedServices.filter(deselectedService => deselectedService !== service));
                  }
                }}
              />
            ))}
          </Form.Group>
        </Row>
      </Form>
      <Button variant="primary" size="md" active>
        Back
      </Button>{" "}
      <Button variant="secondary" size="md" active>
        Next
      </Button>
    </Col>
  );
}