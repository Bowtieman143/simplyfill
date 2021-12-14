import { useState } from "react";
import { Col, Form, Row, NavDropdown, Nav } from "react-bootstrap";
import Contract from "./Documents/Contract";
import Invoice from "./Documents/Invoice";
import Proposal from "./Documents/Proposal";
import ScopeOfWork from "./Documents/ScopeOfWork";
import Test from "./Documents/Test";

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
    <Col md={9} id="primary" className="pt-0 px-0">
      <div className="sticky-top">

      <Nav
        variant="pills"
        className="justify-content-center bg-white py-4 mb-0"
        defaultActiveKey="1"
      >
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
      <Nav
        className="justify-content-center bg-secondary py-2 mb-4"
        defaultActiveKey="proposal-document"
      >
        <Nav.Item>
          <Nav.Link
            eventKey="proposal-document"
          >
            Download Document
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="copy-document"
          >
            Copy Document
          </Nav.Link>
        </Nav.Item>
      </Nav>
      </div>

      {currentDocument === "test" && <Test />}

      {currentDocument === "proposal" && (
        <Proposal
          currentMonth={currentMonth}
          currentDate={currentDate}
          retainerPrice={retainerPrice}
          businessName={businessName}
          paymentOption={paymentOption}
          projectName={projectName}
          projectPrice={projectPrice}
          businessAddress={businessAddress}
          selectedServices={selectedServices}
          selectedSubServices={selectedSubServices}
          isRetainer={isRetainer}
          selectedRetainerSubServices={selectedRetainerSubServices}
          contractStartDate={contractStartDate}
          contractEndDate={contractEndDate}
        />
      )}

      {currentDocument === "invoice" && (
        <Invoice
          businessName={businessName}
          businessAddress={businessAddress}
          currentDate={currentDate}
        />
      )}

      {currentDocument === "scopeOfWork" && (
        <ScopeOfWork businessName={businessName} />
      )}

      {currentDocument === "contract" && (
        <Contract
          currentMonth={currentMonth}
          currentDate={currentDate}
          retainerPrice={retainerPrice}
          businessName={businessName}
          paymentOption={paymentOption}
          projectName={projectName}
          projectPrice={projectPrice}
          businessAddress={businessAddress}
          selectedServices={selectedServices}
          selectedSubServices={selectedSubServices}
          isRetainer={isRetainer}
          selectedRetainerSubServices={selectedRetainerSubServices}
          contractStartDate={contractStartDate}
          contractEndDate={contractEndDate}
        />
      )}
    </Col>
  );
}
