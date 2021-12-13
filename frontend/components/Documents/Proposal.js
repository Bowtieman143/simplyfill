import Image from "next/image";
import ScopeOfWork from "./ScopeOfWork";
import Contract from "./Contract";
import Invoice from "./Invoice";

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

  return (
    <div id="proposal-container">
      <div id="proposal">
        <Image
          src="/logo-dark.png"
          width={180}
          height={53}
          className="d-inline-block align-top"
          id="contract-document-img"
        />
        <ScopeOfWork businessName={businessName} />

        <h4 className="mt-5 mb-5">Pricing / Costs</h4>

        <Invoice
          showCompanyDetails={false}
          businessName={businessName}
          businessAddress={businessAddress}
          currentDate={currentDate}
        />

        <h4 className="mt-5 mb-5">Terms and Conditions</h4>

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
