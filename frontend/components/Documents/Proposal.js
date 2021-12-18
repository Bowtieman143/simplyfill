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
    projectPhases,
  } = props;

  return (
    <div id="proposal-container">
      <div id="proposal">
        <DocumentLogo />
        <ScopeOfWork
          businessName={businessName}
          currentDate={currentDate}
          projectName={projectName}
          businessAddress={businessAddress}
          projectPhases={projectPhases}
        />

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
