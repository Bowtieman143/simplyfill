import Image from "next/image";
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
            <h4>SIGNATURES</h4>
          </li>
        </ol>
      </div>
    </div>
  );
}
