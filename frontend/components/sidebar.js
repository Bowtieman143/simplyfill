import { Col, Form, Row, Button, Carousel } from "react-bootstrap";

export default function Sidebar(props) {
  const {
    projectName,
    setProjectName,
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
    selectedRetainerSubServices,
    setSelectedRetainerSubServices,
    contractStartDate,
    setContractStartDate,
    contractEndDate,
    setContractEndDate,
  } = props;

  return (
    <Col md={3} id="sidebar" className="bg-dark text-light h-100 p-4">
      <Carousel controls={true} indicators={false} interval={null}>
        <Carousel.Item>
          <h5 className="mb-2">1. Identification of The Parties</h5>
          <Form className="mb-5">
            <h5 className="mt-4 mb-3">Business Details</h5>
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
            <h5 className="mt-4 mb-3">Provided Services</h5>
            <Row className="mb-3">
              <Form.Group className="mb-4" controlId="formBasicCheckbox">
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
          <h5 className="mb-2">2. Engagement and Services</h5>
          <Form>
            <Row className="my-9">
              <Form.Group className="my-2" controlId="formretainercheckbox">
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
            </Row>
            <h5 className="mt-4 mb-4">Single Project</h5>
            <Row>
              {selectedServices.map((service) => (
                <>
                  <h6 className="mb-3">{service.name}</h6>
                  <Form.Group className="mb-4">
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
                </>
              ))}
            </Row>

            {isRetainer && (
              <div>
                <hr />
                <h5 className="mt-4 mb-4">Retainer Work</h5>
                <Row>
                  {selectedServices.map((service) => (
                    <>
                      <h6 className="mb-3">{service.name}</h6>
                      <Form.Group className="mb-4">
                        {service.subServices.map((subService) => (
                          <Form.Check
                            type="checkbox"
                            id={`retainer-service-${subService}`}
                            label={subService}
                            key={subService}
                            onChange={(e) => {
                              if (e.target.checked === true) {
                                setSelectedRetainerSubServices([
                                  ...selectedRetainerSubServices,
                                  subService,
                                ]);
                              } else {
                                setSelectedRetainerSubServices(
                                  selectedRetainerSubServices.filter(
                                    (deselectedRetainerSubService) =>
                                      deselectedRetainerSubService !==
                                      subService
                                  )
                                );
                              }
                            }}
                          />
                        ))}
                      </Form.Group>
                    </>
                  ))}
                </Row>
              </div>
            )}
          </Form>
        </Carousel.Item>
        <Carousel.Item>
          <h5 className="mb-2">3. Service Period and Termination</h5>
          <Form className="mb-5">
            <h6 className="mt-4 mb-3">Contract Start Date</h6>
            <Form.Group className="mb-3" controlId="formstartdate">
              <Form.Control type="date" value={contractStartDate} onChange={(e) => {
                setContractStartDate(e.target.value)
              }}/>
            </Form.Group>
            <h6 className="mt-4 mb-3">Contract End Date</h6>
            <Form.Group className="mb-3" controlId="formenddate">
              <Form.Control type="date" value={contractEndDate} onChange={(e) => {
                setContractEndDate(e.target.value)
              }}/>
            </Form.Group>
          </Form>
        </Carousel.Item>
      </Carousel>
    </Col>
  );
}
