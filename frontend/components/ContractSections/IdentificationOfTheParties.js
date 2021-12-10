import { Col, Form, Row, Button } from "react-bootstrap";

export default function IdentificationOfTheParties(props) {
  const { businessName, currentDate } = props;

  return (
    <li>
      <h4>IDENTIFICATION OF THE PARTIES</h4>
      <ol>
        <li>
          <p>
            This Service Agreement (the ‘Agreement’) is made and entered into on
            this {currentDate} day of [Current Month] (the ‘Effective Date’) by
            and between {businessName} with its registered address at [Client
            Company Address] (the ‘Client’) and Intangible Media LLC (the
            ‘Service Provider’).
          </p>
        </li>
      </ol>
    </li>
  );
}
