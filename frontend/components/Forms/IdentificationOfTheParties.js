import { Row, Col, Form } from "react-bootstrap";

export default function IdentificationOfTheParties(props) {
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
    <Form>
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
      <h6 className="mb-3">Provided Services</h6>
      <Row className="mb-3">
        <Form.Group className="mb-4" controlId="formBasicCheckbox">
          {services.map((service) => (
            <Form.Check
              type="checkbox"
              id={`service-${service.name}`}
              label={service.name}
              key={`provided-service-${service.name}`}
              onChange={(e) => {
                if (e.target.checked === true) {
                  setSelectedServices([...selectedServices, service]);
                } else {
                  setSelectedServices(
                    selectedServices.filter(
                      (deselectedService) =>
                        deselectedService.name !== service.name
                    )
                  );
                }
              }}
            />
          ))}
        </Form.Group>
      </Row>
    </Form>
  );
}
