import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "react-bootstrap";
import ReactToPrint from "react-to-print";
import ScopeOfWork from "./ScopeOfWork";
import Contract from "./Contract";
import Invoice from "./Invoice";
import DocumentLogo from "../DocumentLogo";

export default function Proposal(props) {
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
    currentDate,
    currentMonth,
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
  }, []);

  const handleOnBeforeGetContent = useCallback(() => {
    console.log("`onBeforeGetContent` called");
    setLoading(true);
    setRemoveStyles(true);
  }, [setLoading]);

  const reactToPrintContent = useCallback(() => {
    return componentRef.current;
  }, [componentRef.current]);

  const reactToPrintTrigger = useCallback(() => {
    // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
    // to the root node of the returned component as it will be overwritten.

    // Bad: the `onClick` here will be overwritten by `react-to-print`
    // return <button onClick={() => alert('This will not work')}>Print this out!</button>;

    // Good
    return (
      <div>
        {!removeStyles && (
          <Button variant="primary" className="text-white rounded-0 py-2 px-3">
            Download
          </Button>
        )}
      </div>
    ); // eslint-disable-line max-len
  }, []);

  return (
    <div id="proposal-container">
      <ReactToPrint
        content={reactToPrintContent}
        documentTitle="AwesomeFileName"
        onAfterPrint={handleAfterPrint}
        onBeforeGetContent={handleOnBeforeGetContent}
        onBeforePrint={handleBeforePrint}
        removeAfterPrint
        trigger={reactToPrintTrigger}
      />

      {loading && <p className="indicator">onBeforeGetContent: Loading...</p>}

      <div
        id="proposal"
        ref={componentRef}
        className={removeStyles ? "pdf-document" : ""}
      >
        <DocumentLogo />
        <ScopeOfWork businessName={businessName} />

        <h4 className="fw-bold mt-5 mb-3">Pricing / Costs</h4>

        <Invoice
          showCompanyDetails={false}
          businessName={businessName}
          businessAddress={businessAddress}
          currentDate={currentDate}
        />

        <h4 className="fw-bold mt-4 mb-5">Terms and Conditions</h4>

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
      </div>
    </div>
  );
}
