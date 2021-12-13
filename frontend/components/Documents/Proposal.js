import ScopeOfWork from "./ScopeOfWork";
import Contract from "./Contract";

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
      <h2 className="text-center mb-5">Proposal - {businessName}</h2>

      <div id="proposal">
        <img
          alt=""
          src="/logo-dark.png"
          width="180"
          className="d-inline-block align-top"
        />

        <ScopeOfWork businessName={businessName} />
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
