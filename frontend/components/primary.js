import { Col, Form, Row } from "react-bootstrap";
import IdentificationOfTheParties from "./ContractSections/IdentificationOfTheParties";
import EngagementAndServices from "./ContractSections/EngagementAndServices";
import ServicePeriodAndTermination from "./ContractSections/ServicePeriodAndTermination";
import FeesForServicesPerformed from "./ContractSections/FeesForServicesPerformed";
import ObligationsOfTheClient from "./ContractSections/ObligationsOfTheClient";
import OwnershipAndRisk from "./ContractSections/OwnershipAndRisk";
import ConfidentialityAndResponsibility from "./ContractSections/ConfidentialityAndResponsibility";
import NoCompetition from "./ContractSections/NoCompetition";
import Warranties from "./ContractSections/Warranties";
import IndependentContractors from "./ContractSections/IndependentContractors"
import LimitationOfLiability from "./ContractSections/LimitationOfLiability"

export default function Sidebar(props) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let currentDate = new Date();
  const dd = String(currentDate.getDate()).padStart(2, "0");
  const mm = String(currentDate.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = currentDate.getFullYear();
  const currentMonth = monthNames[new Date().getMonth()];

  currentDate = mm + "/" + dd + "/" + yyyy;

  const {
    retainerPrice,
    businessName,
    paymentOption,
    projectName,
    projectPrice,
    businessAddress,
    selectedServices,
    selectedSubServices,
    isRetainer,
    selectedRetainerSubServices,
    contractStartDate,
    contractEndDate,
  } = props;

  return (
    <Col md={9} id="primary" className="pt-5">
      <h2 className="text-center mb-5">Service Agreement - {businessName}</h2>
      <div id="contract">
        <img
          alt=""
          src="/logo-dark.png"
          width="180"
          className="d-inline-block align-top"
        />
        <ol className="">
          <IdentificationOfTheParties
            businessName={businessName}
            currentDate={currentDate}
            currentMonth={currentMonth}
            businessAddress={businessAddress}
            selectedServices={selectedServices}
          />
          <EngagementAndServices
            businessName={businessName}
            selectedServices={selectedServices}
            selectedSubServices={selectedSubServices}
            isRetainer={isRetainer}
            selectedRetainerSubServices={selectedRetainerSubServices}
            projectName={projectName}
          />
          <ServicePeriodAndTermination
            currentDate={currentDate}
            currentMonth={currentMonth}
            businessAddress={businessAddress}
            contractStartDate={contractStartDate}
            contractEndDate={contractEndDate}
          />
          <FeesForServicesPerformed
            isRetainer={isRetainer}
            projectPrice={projectPrice}
            paymentOption={paymentOption}
            retainerPrice={retainerPrice}
          />
          <ObligationsOfTheClient />
          <OwnershipAndRisk />
          <ConfidentialityAndResponsibility />
          <NoCompetition />
          <Warranties />
          <IndependentContractors />
          <LimitationOfLiability />
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
