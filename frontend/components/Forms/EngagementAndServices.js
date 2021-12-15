import { Form, Row, Col } from "react-bootstrap";

export default function EngagementAndServices(props) {
  const {
    isRetainer,
    setIsRetainer,
    selectedSubServices,
    services,
    selectedServices,
    setSelectedSubServices,
    selectedRetainerSubServices,
    setSelectedRetainerSubServices,
  } = props;

  return (
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
      <h5 className="mb-4">Single Project</h5>
      <Row>
        {selectedServices.map((service) => (
          <div key={`single-project-${service.name}-group`}>
            <h6 className="mb-3">{service.name}</h6>
            <Form.Group className="mb-4">
              {service.subServices.map((subService) => (
                <Form.Check
                  type="checkbox"
                  id={`oneoff-service-${subService}`}
                  label={subService}
                  key={`single-project-subservice-${subService}`}
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
      </Row>

      {isRetainer && (
        <div>
          <hr />
          <h5 className="mb-4">Retainer Work</h5>
          <Row>
            {selectedServices.map((service) => (
              <div key={`single-project-${service.name}-group`}>
                <h6 className="mb-3">{service.name}</h6>
                <Form.Group className="mb-4">
                  {service.subServices.map((subService) => (
                    <Form.Check
                      type="checkbox"
                      id={`retainer-service-${subService}`}
                      label={subService}
                      key={`retainer-project-subservice-${subService}`}
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
                                deselectedRetainerSubService !== subService
                            )
                          );
                        }
                      }}
                    />
                  ))}
                </Form.Group>
              </div>
            ))}
          </Row>
        </div>
      )}
    </Form>
  );
}
