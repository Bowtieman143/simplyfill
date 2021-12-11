import { Col, Form, Row, Button, Carousel } from "react-bootstrap";

export default function Sidebar(props) {
  const {
    businessName,
    setBusinessName,
    businessAddress,
    setBusinessAddress,
    services,
    setServices,
    selectedServices,
    setSelectedServices,
  } = props;

  return (
    <Col md={3} id="sidebar" className="bg-dark text-light h-100 p-4">
      <Carousel controls={true} indicators={false} interval={null}>
        <Carousel.Item>
          <h5 className="mb-5">1. IDENTIFICATION OF THE PARTIES</h5>
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
                        setSelectedServices(
                          selectedServices.filter(
                            (deselectedService) => deselectedService !== service
                          )
                        );
                      }
                    }}
                  />
                ))}
              </Form.Group>
            </Row>
          </Form>
        </Carousel.Item>
        <Carousel.Item>
          <h5 className="mb-5">2. ENGAGEMENT AND SERVICES</h5>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>
          </Form>
        </Carousel.Item>
      </Carousel>
    </Col>
  );
}
