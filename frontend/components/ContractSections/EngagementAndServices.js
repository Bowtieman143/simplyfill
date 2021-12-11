import { Col, Form, Row, Button } from "react-bootstrap";

export default function EngagementAndServices(props) {
  const {
    selectedServices,
    projectName,
    selectedSubServices,
    isRetainer,
    selectedRetainerSubServices,
  } = props;

  return (
    <li>
      <h5>ENGAGEMENT AND SERVICES</h5>
      <ol>
        <li>
          <p>
            The Client hereby engages the Service Provider to provide and
            perform the following Services in connection with{" "}
            {selectedServices.map((service) => (
              <span className="contract-alteration">
                {`${service.name}`}
                {selectedServices.length > 1 ? " / " : ""}
              </span>
            ))}{" "}
            . These Services shall include the following:
          </p>
          <ol>
            {selectedSubServices.map((subService) => (
              <li>
                <p><span className="contract-alteration">{subService}</span></p>
              </li>
            ))}
          </ol>
        </li>
        {isRetainer && (
          <li>
            <p>
              The Client hereby engages the Service Provider to provide and
              perform the following Services on an ongoing basis, in terms of a
              retainer arrangement OR to be billed on an hourly basis, in
              connection with{" "}
              <span className="contract-alteration">{projectName}</span>. These
              Services shall include the following
            </p>
            <ol>
              {selectedRetainerSubServices.map((subService) => (
                <li>
                  <p><span className="contract-alteration">{subService}</span></p>
                </li>
              ))}
            </ol>
          </li>
        )}
        <li>
          <p>
            All Services to be performed by the Service Provider shall be
            performed with promptness, in a diligent manner and at a level of
            proficiency to be expected from the Service Provider with the
            background and experience that the Service Provider has represented
            it has. The Client shall provide the Service Provider with the
            necessary access to information, property and personnel as may be
            reasonably required in order to permit the Service Provider to
            perform the Services listed above.
          </p>
        </li>
      </ol>
    </li>
  );
}
