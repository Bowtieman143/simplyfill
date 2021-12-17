import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "react-bootstrap";
import ReactToPrint from "react-to-print";
import { Col, Form, Row, NavDropdown, Nav } from "react-bootstrap";
import Contract from "../Documents/Contract";
import Invoice from "../Documents/Invoice";
import Proposal from "../Documents/Proposal";
import ScopeOfWork from "../Documents/ScopeOfWork";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileDownload,
  faClipboardCheck,
  faLink,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

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
  const [showSecondaryNav, setShowSecondaryNav] = useState(true);

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

  const pageStyle = `
    @media print {
      html, body {
        height: initial !important;
        overflow: initial !important;
        -webkit-print-color-adjust: exact;
      }
    }
    
    @page {
      size: auto;
      margin: .75in;
    }

    @media all {

      #contract ol {
        counter-reset: item;
      }
      
      #contract ol li {
        display: block;
        position: relative;
        margin-bottom: 35px;
      }
      
      #contract ol li ol li {
        display: block;
        position: relative;
        margin-bottom: 15px;
      }
      
      #contract ol li h5 {
        margin-bottom: 25px;
      }
      
      #contract ol p:before,
      #contract ol h5:before {
        content: counters(item, ".") " ";
        counter-increment: item;
        position: absolute;
        top: 0px;
        left: -20px;
      }

      #contract ol ol p:before,
      #contract ol ol h5:before {
        content: counters(item, ".") " ";
        counter-increment: item;
        position: absolute;
        top: 0px;
        left: -40px;
      }
      
      #contract ol ol ol ol {
        padding-left: 50px;
      }
      
      #contract ol ol ol ol ul {
        padding-left: 0;
      }
      
      #contract ol ol ol ol ul li,
      #contract ol ul.dotted-list li {
        list-style: disc outside none;
        display: list-item;
        margin-left: 1em;
      }
      
      #contract ol ol ol ol ul p:before,
      #contract ol ul.dotted-list li p::before {
        background-color: red;
        counter-increment: none;
        position: static;
        content: none;
      }
      
      #contract ol ol ol ol p:before {
        left: -60px;
      }
    }
  `;

  const ReactToPrintTrigger = useCallback(() => {
    // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
    // to the root node of the returned component as it will be overwritten.

    // Bad: the `onClick` here will be overwritten by `react-to-print`
    // return <button onClick={() => alert('This will not work')}>Print this out!</button>;

    // Good
    return (
      <Button variant="primary" className="text-white rounded-0 py-2 px-3 mt-4">
        <FontAwesomeIcon icon={faFileDownload} />
      </Button>
    ); // eslint-disable-line max-len
  }, []);

  return (
    <Col md={9} xl={10} id="primary" className="pt-0 px-0">
      {loading && <p className="indicator">onBeforeGetContent: Loading...</p>}

      <div className="sticky-top mb-5">
        <Nav
          variant="pills"
          className="justify-content-center shadow bg-white py-3 mb-0"
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
        <div id="secondary-navbar-trigger-container" className="">
          <ReactToPrint
            content={reactToPrintContent}
            documentTitle="AwesomeFileName"
            onAfterPrint={handleAfterPrint}
            onBeforeGetContent={handleOnBeforeGetContent}
            onBeforePrint={handleBeforePrint}
            removeAfterPrint
            trigger={ReactToPrintTrigger}
            pageStyle={pageStyle}
          />
          <Button
            variant="primary"
            className="text-white rounded-0 py-2 px-3 mt-0" disabled
          >
            <FontAwesomeIcon icon={faClipboardCheck} />
          </Button>
          <Button
            variant="primary"
            className="text-white rounded-0 py-2 px-3 mt-0" disabled
          >
            <FontAwesomeIcon icon={faLink} />
          </Button>
          <Button
            variant="primary"
            className="text-white rounded-0 py-2 px-3 mt-0" disabled
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </Button>
        </div>
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
