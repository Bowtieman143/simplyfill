import { useState, useEffect, useRef, useCallback } from "react";
import ReactToPrint from "react-to-print";
import Image from "next/image";
import { Button } from "react-bootstrap";
import IdentificationOfTheParties from "../ContractSections/IdentificationOfTheParties";
import EngagementAndServices from "../ContractSections/EngagementAndServices";
import ServicePeriodAndTermination from "../ContractSections/ServicePeriodAndTermination";
import FeesForServicesPerformed from "../ContractSections/FeesForServicesPerformed";
import ObligationsOfTheClient from "../ContractSections/ObligationsOfTheClient";
import OwnershipAndRisk from "../ContractSections/OwnershipAndRisk";
import ConfidentialityAndResponsibility from "../ContractSections/ConfidentialityAndResponsibility";
import NoCompetition from "../ContractSections/NoCompetition";
import Warranties from "../ContractSections/Warranties";
import IndependentContractors from "../ContractSections/IndependentContractors";
import LimitationOfLiability from "../ContractSections/LimitationOfLiability";
import TransferOfIntellectualPropertyRights from "../ContractSections/TransferOfIntellectualPropertyRights";
import Assignment from "../ContractSections/Assignment";
import GoverningLawAndDisputeResolution from "../ContractSections/GoverningLawAndDisputeResolution";
import RecoveryOfLitigationExpenses from "../ContractSections/RecoveryOfLitigationExpenses";
import General from "../ContractSections/General";
import Severability from "../ContractSections/Severability";
import DocumentLogo from "../DocumentLogo";

export default function Contract(props) {
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
      <Button
        id="contract-download-document-btn"
        variant="primary"
        className="text-white rounded-0 sticky-top py-2 px-3"
      >
        Download
      </Button>
    ); // eslint-disable-line max-len
  }, []);

  return (
    <div id="contract-container">
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
        id="contract"
        ref={componentRef}
        className={removeStyles ? "pdf-document" : ""}
      >
        <DocumentLogo />
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
  );
}
