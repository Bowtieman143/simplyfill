import { Col, Form, Row, Button } from "react-bootstrap";

export default function IdentificationOfTheParties(props) {
  const {
    businessName,
    currentDate,
    currentMonth,
    businessAddress,
    selectedServices,
  } = props;

  return (
    <li>
      <h5 id="contract-section-one">IDENTIFICATION OF THE PARTIES</h5>
      <ol>
        <li>
          <p>
            This Service Agreement (the 'Agreement') is made and entered into on
            this <span className="entered-data">{currentDate}</span> day
            of <span className="entered-data">{currentMonth}</span> (the
            'Effective Date') by and between{" "}
            <span className="entered-data">{businessName}</span> with its
            registered address at{" "}
            <span className="entered-data">{businessAddress}</span> (the
            'Client') and Intangible Media LLC (the 'Service Provider').
          </p>
        </li>
        <li>
          <p>
            The Client and the Service Provider are hereinafter referred to
            individually as a 'Party' and collectively as the 'Parties'.
          </p>
        </li>
        <li>
          <p>
            By accepting this Agreement and subject to the terms and conditions
            herein, the Service Provider agrees to provide{" "}
            {selectedServices.map((service) => (
              <span className="entered-data">{`${service.name} `}</span>
            ))}{" "}
            (the 'Services') to the Client in connection with its business
            operations.
          </p>
        </li>
      </ol>
    </li>
  );
}
