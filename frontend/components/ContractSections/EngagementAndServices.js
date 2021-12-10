import { Col, Form, Row, Button } from "react-bootstrap";

export default function EngagementAndServices(props) {
  const { businessName, currentDate } = props;

  return (
    <li>
      <h4>ENGAGEMENT AND SERVICES</h4>
      <ol>
        <li>
          <p>
            The Client hereby engages the Service Provider to provide and
            perform the following Services in connection with [Website
            Development / Marketing Services / Website Development and Marketing
            Services]. These Services shall include the following:
          </p>
        </li>
        <ol>
          <li>
            <p>Website Development</p>
          </li>
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
