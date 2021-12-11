import { Col, Form, Row, Button } from "react-bootstrap";

export default function EngagementAndServices(props) {
  const { selectedServices, selectedSubServices, isRetainer } = props;

  return (
    <li>
      <h5>ENGAGEMENT AND SERVICES</h5>
      <ol>
        <li>
          <p>
            The Client hereby engages the Service Provider to provide and
            perform the following Services in connection with{" "}
            {selectedServices.map((service) => (
              <span>
                {`${service.name}`}
                {selectedServices.length > 1 ? " / " : ""}
              </span>
            ))}{" "}
            . These Services shall include the following:
          </p>
        </li>
        <ol>
          {selectedSubServices.map((subService) => (
            <li>
              <p>{subService}</p>
            </li>
          ))}
        </ol>
        <li>
          <p>
            The Client hereby engages the Service Provider to provide and
            perform the following Services on an ongoing basis, in terms of a
            retainer arrangement OR to be billed on an hourly basis, in
            connection with [insert name or description of project/business
            operations]. These Services shall include the following
          </p>
        </li>
      </ol>
    </li>
  );
}
