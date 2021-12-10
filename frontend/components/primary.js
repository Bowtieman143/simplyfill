import { Col, Form, Row } from "react-bootstrap";
import IdentificationOfTheParties from "./ContractSections/IdentificationOfTheParties";
import EngagementAndServices from "./ContractSections/EngagementAndServices";
import ServicePeriodAndTermination from "./ContractSections/ServicePeriodAndTermination";
import FeesForServicesPerformed from "./ContractSections/FeesForServicesPerformed";
import ObligationsOfTheClient from "./ContractSections/ObligationsOfTheClient";

export default function Sidebar(props) {
  
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  let currentDate = new Date();
  const dd = String(currentDate.getDate()).padStart(2, "0");
  const mm = String(currentDate.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = currentDate.getFullYear();
  const currentMonth = monthNames[new Date().getMonth()];

  currentDate = mm + "/" + dd + "/" + yyyy;
  
  const { businessName, businessAddress, selectedServices } = props;

  return (
    <Col md={9} id="primary" className="pt-5">
      <h1 className="text-center mb-5">Service Agreement - {businessName}</h1>
      <div id="contract">
        <ol className="">
          <IdentificationOfTheParties 
            businessName={businessName} 
            currentDate={currentDate} 
            currentMonth={currentMonth}
            businessAddress={businessAddress}
            selectedServices={selectedServices} />
          <EngagementAndServices />
          <ServicePeriodAndTermination />
          <FeesForServicesPerformed />
          <ObligationsOfTheClient />
          <li>
            <h4>OWNERSHIP AND RISK</h4>
          </li>
          <li>
            <h4>CONFIDENTIALITY AND RESPONSIBILITY</h4>
          </li>
          <li>
            <h4>NO COMPETITION</h4>
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