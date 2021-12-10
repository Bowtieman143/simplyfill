import { Col, Form, Row } from "react-bootstrap";

export default function Sidebar(props) {
  let currentDate = new Date();
  const dd = String(currentDate.getDate()).padStart(2, "0");
  const mm = String(currentDate.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = currentDate.getFullYear();

  currentDate = mm + "/" + dd + "/" + yyyy;
  const { businessName } = props;

  return (
    <Col md={9} id="primary" className="pt-5">
      <h1 className="text-center mb-5">Service Agreement - {businessName}</h1>
      <div id="contract">
        <ol className="">
          <li>
            <h4>IDENTIFICATION OF T HE PARTIES</h4>
            <ol>
              <li>
                <p>
                  This Service Agreement (the ‘Agreement’) is made and entered
                  into on this {currentDate} day of [Current Month] (the
                  ‘Effective Date’) by and between {businessName} with its
                  registered address at [Client Company Address] (the ‘Client’)
                  and Intangible Media LLC (the ‘Service Provider’).
                </p>
              </li>
            </ol>
          </li>
          <li>
            <h4>ENGAGEMENT AND SERVICES</h4>
            <ol>
              <li>
                <p>
                  This Service Agreement (the ‘Agreement’) is made and entered
                  into on this {currentDate} day of [Current Month] (the
                  ‘Effective Date’) by and between {businessName} with its
                  registered address at [Client Company Address] (the ‘Client’)
                  and Intangible Media LLC (the ‘Service Provider’).
                </p>
              </li>
            </ol>
          </li>
          <li>
            <h4>SERVICE PERIOD AND TERMINATION</h4>
            <ol>
              <li>
                <p>
                  This Service Agreement (the ‘Agreement’) is made and entered
                  into on this {currentDate} day of [Current Month] (the
                  ‘Effective Date’) by and between {businessName} with its
                  registered address at [Client Company Address] (the ‘Client’)
                  and Intangible Media LLC (the ‘Service Provider’).
                </p>
              </li>
              <li>
                <p>
                  This Service Agreement (the ‘Agreement’) is made and entered
                  into on this {currentDate} day of [Current Month] (the
                  ‘Effective Date’) by and between {businessName} with its
                  registered address at [Client Company Address] (the ‘Client’)
                  and Intangible Media LLC (the ‘Service Provider’).
                </p>
              </li>
            </ol>
          </li>
          <li>
            <h4>FEES FOR SERVICES PERFORMED</h4>
          </li>
          <li>
            <h4>OBLIGATIONS OF THE CLIENT</h4>
          </li>
          <li>
            <h4>OWNERSHIP AND RISK</h4>
          </li>
          <li>
            <h4>CONFIDENTIALITY AND RESPONSIBILITY</h4>
          </li>
          <li>
            <h4>WARRANTIES</h4>
          </li>

          <li>
            <h4>INDEPENDENT CONTRACTORS</h4>
          </li>
          <li>
            <h4>LIMITATION OF LIABILITY</h4>
          </li>
          <li>
            <h4>TRANSFER OF INTELLECTUAL PROPERTY RIGHTS</h4>
          </li>
          <li>
            <h4>ASSIGNMENT</h4>
          </li>
          <li>
            <h4>GOVERNING LAW AND DISPUTE RESOLUTION</h4>
          </li>
          <li>
            <h4>RECOVERY OF LITIGATION EXPENSES</h4>
          </li>
          <li>
            <h4>GENERAL</h4>
          </li>
          <li>
            <h4>SEVERABILITY</h4>
          </li>
          <li>
            <h4>SIGNATURES</h4>
          </li>
        </ol>
      </div>
    </Col>
  );
}
