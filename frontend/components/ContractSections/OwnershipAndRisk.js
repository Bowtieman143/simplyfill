import { Col, Form, Row, Button } from "react-bootstrap";

export default function OwnershipAndRisk(props) {
  return (
    <li>
      <h5>OWNERSHIP AND RISK</h5>
      <ol>
        <li>
          <p>
            The Service Provider remains the owner of all equipment, software
            and records used or produced in the service of the Client, until the
            amount owed by the Client to the Service Provider has (have) been
            paid in full.
          </p>
        </li>
        <li>
          <p>
            After payment in full, the Client is the owner of all products, data
            and reports produced by the Service Provider.
          </p>
        </li>
        <li>
          <p>
            The Service Provider is not responsible for anything falling outside
            the scope of services referred to in Section 2 of the Agreement
            unless such services have been agreed to in writing. These
            additional Services shall be subject to the terms and conditions of
            the Agreement as if they have been incorporated hereto.
          </p>
        </li>
        <li>
          <p>
            The Client hereby guarantees that the Service Provider shall not be
            held liable for the results or does not warranty any results flowing
            from the Services provided by the Service Provider. It is
            acknowledged that such Services are based on subjective influences
            which hold no bearing on the liability of, nor can they be
            controlled by, the Service Provider.
          </p>
        </li>
      </ol>
    </li>
  );
}
