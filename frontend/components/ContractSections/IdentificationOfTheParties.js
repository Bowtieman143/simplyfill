import { Col, Form, Row, Button } from "react-bootstrap";

export default function IdentificationOfTheParties(props) {
  const { businessName, currentDate, currentMonth, businessAddress, selectedServices } = props;

  return (
    <li>
      <h4>IDENTIFICATION OF THE PARTIES</h4>
      <ol>
        <li>
          <p>
            This Service Agreement (the ‘Agreement’) is made and entered into on
            this {currentDate} day of {currentMonth} (the ‘Effective Date’) by
            and between {businessName} with its registered address at {businessAddress} (the ‘Client’) and Intangible Media LLC
            (the ‘Service Provider’).
          </p>
        </li>
        <li>
          <p>
            The Client and the Service Provider are hereinafter referred to
            individually as a ‘Party’ and collectively as the ‘Parties’.
          </p>
        </li>
        <li>
          <p>
            By accepting this Agreement and subject to the terms and conditions
            herein, the Service Provider agrees to provide {selectedServices.map(service => (
              <span>{`${service} `}</span>
            ))} (the 'Services') to the Client in connection with its business
            operations.
          </p>
        </li>
      </ol>
    </li>
  );
}
