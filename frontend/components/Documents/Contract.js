import { useState, useEffect, useRef, useCallback } from "react";
import ReactToPrint from "react-to-print";
import Image from "next/image";
import { Button, Row, Col } from "react-bootstrap";
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
import SignaturePad from "react-signature-canvas";

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

  const [
    serviceProviderSignatureImageUrl,
    setServiceProviderSignatureImageUrl,
  ] = useState(null);
  const [clientSignatureImageUrl, setClientSignatureImageUrl] = useState(null);

  const signatureServiceProvider = useRef({});
  const signatureClient = useRef({});

  const saveServiceProviderSignature = () => {
    setServiceProviderSignatureImageUrl(
      signatureServiceProvider.current.getTrimmedCanvas().toDataURL("image/png")
    );
  };

  const saveServiceClient = () => {
    setClientSignatureImageUrl(
      signatureClient.current.getTrimmedCanvas().toDataURL("image/png")
    );
  };

  return (
    <div id="contract-container">
      <div id="contract">
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
            <h5>SIGNATURES</h5>
            <Row>
              <Col>
                {serviceProviderSignatureImageUrl ? (
                  <img src={serviceProviderSignatureImageUrl} />
                ) : (
                  <>
                    <SignaturePad
                      ref={signatureServiceProvider}
                      canvasProps={{
                        className: "signatureCanvas",
                      }}
                    />
                    <Button
                      variant="primary text-white mt-3"
                      onClick={saveServiceProviderSignature}
                    >
                      Save Signature
                    </Button>
                  </>
                )}
              </Col>
              <Col>
                {clientSignatureImageUrl ? (
                  <img src={clientSignatureImageUrl} />
                ) : (
                  <>
                    <SignaturePad
                      ref={signatureClient}
                      canvasProps={{
                        className: "signatureCanvas",
                      }}
                    />
                    <Button
                      variant="primary text-white mt-3"
                      onClick={saveServiceClient}
                    >
                      Save Signature
                    </Button>
                  </>
                )}
              </Col>
            </Row>
          </li>
        </ol>
      </div>
    </div>
  );
}
