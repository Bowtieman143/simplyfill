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
            This Service Agreement (the &apos;Agreement&apos;) is made and entered into on
            this <span className="entered-data">{currentDate}</span> day
            of <span className="entered-data">{currentMonth}</span> (the
            &apos;Effective Date&apos;) by and between{" "}
            <span className="entered-data">{businessName}</span> with its
            registered address at{" "}
            <span className="entered-data">{businessAddress}</span> (the
            &apos;Client&apos;) and Intangible Media LLC (the &apos;Service Provider&apos;).
          </p>
        </li>
        <li>
          <p>
            The Client and the Service Provider are hereinafter referred to
            individually as a &apos;Party&apos; and collectively as the &apos;Parties&apos;.
          </p>
        </li>
        <li>
          <p>
            By accepting this Agreement and subject to the terms and conditions
            herein, the Service Provider agrees to provide{" "}
            {selectedServices.map((service) => (
              <span className="entered-data" key={`identification-${service.name}`}>{`${service.name} `}</span>
            ))}{" "}
            (the &apos;Services&apos;) to the Client in connection with its business
            operations.
          </p>
        </li>
      </ol>
    </li>
  );
}
