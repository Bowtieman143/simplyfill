import { Col, Form, Row, Button, Carousel } from "react-bootstrap";

export default function Sidebar(props) {
  const {
    isRetainer,
    setIsRetainer,
    businessName,
    setBusinessName,
    businessAddress,
    setBusinessAddress,
    services,
    setServices,
    selectedServices,
    setSelectedServices,
    selectedSubServices,
    setSelectedSubServices,
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
                    id={`service-${service.name}`}
                    label={service.name}
                    key={service.name}
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
        </Carousel.Item>
        <Carousel.Item>
          <h5 className="">2. ENGAGEMENT AND SERVICES</h5>
          <Form>
            <Row className="my-9">
              <Form.Group className="my-3" controlId="formretainercheckbox">
                <Form.Check
                  type="checkbox"
                  id="retainer-checkbox"
                  label="Is Retainer"
                  onChange={(e) => {
                    if (e.target.checked === true) {
                      setIsRetainer(true);
                    } else {
                      setIsRetainer(false);
                    }
                  }}
                />
              </Form.Group>
              {selectedServices.map((service) => (
                <div>
                  <h6>{service.name}</h6>
                  <hr />
                  <Form.Group className="mb-3">
                    {service.subServices.map((subService) => (
                      <Form.Check
                        type="checkbox"
                        id={`oneoff-service-${subService}`}
                        label={subService}
                        key={subService}
                        onChange={(e) => {
                          if (e.target.checked === true) {
                            setSelectedSubServices([
                              ...selectedSubServices,
                              subService,
                            ]);
                          } else {
                            setSelectedSubServices(
                              selectedSubServices.filter(
                                (deselectedSubService) =>
                                  deselectedSubService !== subService
                              )
                            );
                          }
                        }}
                      />
                    ))}
                  </Form.Group>
                </div>
              ))}

              {isRetainer && (
                <div>
                  {selectedServices.map((service) => (
                    <div>
                      <h6>{service.name}</h6>
                      <hr />
                      <Form.Group className="mb-3">
                        {service.subServices.map((subService) => (
                          <Form.Check
                            type="checkbox"
                            id={`retainer-service-${subService}`}
                            label={subService}
                            key={subService}
                            onChange={(e) => {
                              if (e.target.checked === true) {
                                setSelectedSubServices([
                                  ...selectedSubServices,
                                  subService,
                                ]);
                              } else {
                                setSelectedSubServices(
                                  selectedSubServices.filter(
                                    (deselectedSubService) =>
                                      deselectedSubService !== subService
                                  )
                                );
                              }
                            }}
                          />
                        ))}
                      </Form.Group>
                    </div>
                  ))}
                </div>
              )}
            </Row>
          </Form>
        </Carousel.Item>
      </Carousel>
    </Col>
  );
}
