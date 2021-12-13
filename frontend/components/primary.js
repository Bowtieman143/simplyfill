import { useState } from "react";
import { Col, Form, Row, NavDropdown, Nav } from "react-bootstrap";
import IdentificationOfTheParties from "./ContractSections/IdentificationOfTheParties";
import EngagementAndServices from "./ContractSections/EngagementAndServices";
import ServicePeriodAndTermination from "./ContractSections/ServicePeriodAndTermination";
import FeesForServicesPerformed from "./ContractSections/FeesForServicesPerformed";
import ObligationsOfTheClient from "./ContractSections/ObligationsOfTheClient";
import OwnershipAndRisk from "./ContractSections/OwnershipAndRisk";
import ConfidentialityAndResponsibility from "./ContractSections/ConfidentialityAndResponsibility";
import NoCompetition from "./ContractSections/NoCompetition";
import Warranties from "./ContractSections/Warranties";
import IndependentContractors from "./ContractSections/IndependentContractors";
import LimitationOfLiability from "./ContractSections/LimitationOfLiability";
import TransferOfIntellectualPropertyRights from "./ContractSections/TransferOfIntellectualPropertyRights";
import Assignment from "./ContractSections/Assignment";
import GoverningLawAndDisputeResolution from "./ContractSections/GoverningLawAndDisputeResolution";
import RecoveryOfLitigationExpenses from "./ContractSections/RecoveryOfLitigationExpenses";
import General from "./ContractSections/General";
import Severability from "./ContractSections/Severability";

export default function Sidebar(props) {
  const [currentDocument, setCurrentDocument] = useState("contract");

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
    <Col md={9} id="primary" className="pt-0">
      <Nav variant="pills" className="justify-content-center py-4 mb-4" defaultActiveKey="1">
        <Nav.Item>
          <Nav.Link
            eventKey="1"
            onClick={() => {
              setCurrentDocument("contract");
            }}
          >
            Service Agreement
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="2"
            onClick={() => {
              setCurrentDocument("scopeOfWork");
            }}
          >
            Scope of Work
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="3"
            onClick={() => {
              setCurrentDocument("proposal");
            }}
          >
            Proposal
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="4"
            onClick={() => {
              setCurrentDocument("invoice");
            }}
          >
            Invoice
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {currentDocument === "proposal" && (
        <div id="proposal-container">
                    <h2 className="text-center mb-5">Proposal - {businessName}</h2>

          <div id="proposal">
            <img
              alt=""
              src="/logo-dark.png"
              width="180"
              className="d-inline-block align-top"
            />
          </div>
        </div>
      )}

      {currentDocument === "invoice" && (
        <div id="invoice-container">
                    <h2 className="text-center mb-5">Invoice - {businessName}</h2>

          <div id="invoice">
            <img
              alt=""
              src="/logo-dark.png"
              width="180"
              className="d-inline-block align-top"
            />
          </div>
        </div>
      )}

      {currentDocument === "scopeOfWork" && (
        <div id="scope-of-work-container">
                    <h2 className="text-center mb-5">Scope of Work - {businessName}</h2>

          <div id="scope">
            <img
              alt=""
              src="/logo-dark.png"
              width="180"
              className="d-inline-block align-top"
            />
          </div>
        </div>
      )}

      {currentDocument === "contract" && (
        <div id="contract-container">
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
              <TransferOfIntellectualPropertyRights />
              <Assignment />
              <GoverningLawAndDisputeResolution />
              <RecoveryOfLitigationExpenses />
              <General />
              <Severability />
              <li>
                <h4>SIGNATURES</h4>
              </li>
            </ol>
          </div>
        </div>
      )}
    </Col>
  );
}
