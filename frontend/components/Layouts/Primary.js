import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "react-bootstrap";
import ReactToPrint from "react-to-print";
import { Col, Form, Row, NavDropdown, Nav } from "react-bootstrap";
import Contract from "../Documents/Contract";
import Invoice from "../Documents/Invoice";
import Proposal from "../Documents/Proposal";
import ScopeOfWork from "../Documents/ScopeOfWork";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFileDownload,
//   faClipboardCheck,
// } from "@fortawesome/free-solid-svg-icons";

export default function Primary(props) {
  const { currentDocument, setCurrentDocument } = props;
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

  const [removeStyles, setRemoveStyles] = useState(false);
  const [loading, setLoading] = useState(false);
  const componentRef = useRef(null);

  const handleAfterPrint = useCallback(() => {
    console.log("`onAfterPrint` called");
    setRemoveStyles(false);
    setLoading(false);
  }, []);

  const handleBeforePrint = useCallback(() => {
    console.log("`onBeforePrint` called");
    setLoading(false);
  }, []);

  const handleOnBeforeGetContent = useCallback(() => {
    console.log("`onBeforeGetContent` called");
    setLoading(true);
    setRemoveStyles(true);
  }, [setLoading]);

  const reactToPrintContent = useCallback(() => {
    return componentRef.current;
  }, [componentRef.current]);

  const ReactToPrintTrigger = useCallback(() => {
    // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
    // to the root node of the returned component as it will be overwritten.

    // Bad: the `onClick` here will be overwritten by `react-to-print`
    // return <button onClick={() => alert('This will not work')}>Print this out!</button>;

    // Good
    return (
      <Button variant="dark" className="text-white py-2 px-3">
        Download
      </Button>
    ); // eslint-disable-line max-len
  }, []);

  return (
    <Col md={9} xl={10} id="primary" className="pt-0 px-0">
      {loading && <p className="indicator">onBeforeGetContent: Loading...</p>}

      <div className="sticky-top shadow mb-5">
        <Nav
          variant="pills"
          className="justify-content-center bg-white py-3 mb-0"
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
          className="justify-content-center bg-secondary py-3 mb-4"
          defaultActiveKey="proposal-document"
        >
          <Nav.Item className="mx-2">
            <ReactToPrint
              content={reactToPrintContent}
              documentTitle="AwesomeFileName"
              onAfterPrint={handleAfterPrint}
              onBeforeGetContent={handleOnBeforeGetContent}
              onBeforePrint={handleBeforePrint}
              removeAfterPrint
              trigger={ReactToPrintTrigger}
            />
          </Nav.Item>
          <Nav.Item className="mx-2">
            <Button
              id="copy-document"
              variant="outline-dark"
              className="py-2 px-3"
            >
              Copy Text
            </Button>
          </Nav.Item>
        </Nav>
      </div>

      <section
        ref={componentRef}
        className={removeStyles ? "pdf-document" : ""}
      >
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
      </section>
    </Col>
  );
}
