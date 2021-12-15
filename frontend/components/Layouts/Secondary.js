import { useState } from "react";
import { Col, Form, Row, Button, Carousel, ProgressBar } from "react-bootstrap";
import EngagementAndServices from "../Forms/EngagementAndServices";
import FeesForServicesPerformed from "../Forms/FeesForServicesPerformed";
import IdentificationOfTheParties from "../Forms/IdentificationOfTheParties";
import ServicePeriodAndTermination from "../Forms/ServicePeriodAndTermination";

export default function Secondary(props) {
  const {
    currentDocument,
    retainerPrice,
    setRetainerPrice,
    paymentOption,
    setPaymentOption,
    projectName,
    setProjectName,
    projectPrice,
    setProjectPrice,
    isRetainer,
    setIsRetainer,
    businessName,
    setBusinessName,
    businessAddress,
    setBusinessAddress,
    services,
    setServices,
    selectedServices,
    setSelectedServices,
    selectedSubServices,
    setSelectedSubServices,
    selectedRetainerSubServices,
    setSelectedRetainerSubServices,
    contractStartDate,
    setContractStartDate,
    contractEndDate,
    setContractEndDate,
  } = props;

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const currentProgress = (100 / 4) * (index + 1);

  return (
    <Col md={3} id="sidebar" className="bg-dark text-light h-100 p-0">
      {currentDocument == "contract" && (
        <div id="contract-document-form">
          <div className="bg-dark sticky-top px-4 pb-1 pt-3">
            <h3 className="mb-4">Service Agreement</h3>
            <ProgressBar
              animated
              striped
              now={currentProgress}
              label={`${currentProgress}% Done`}
              className="mb-4"
            />
          </div>
          <Carousel
            className="p-4"
            controls={true}
            indicators={false}
            interval={null}
            activeIndex={index}
            onSelect={handleSelect}
          >
            <Carousel.Item>
              <IdentificationOfTheParties
                projectName={projectName}
                setProjectName={setProjectName}
                businessName={businessName}
                setBusinessName={setBusinessName}
                businessAddress={businessAddress}
                setBusinessAddress={setBusinessAddress}
                services={services}
                setServices={setServices}
                selectedServices={selectedServices}
                setSelectedServices={setSelectedServices}
              />
            </Carousel.Item>
            <Carousel.Item>
              <EngagementAndServices
                selectedSubServices={selectedSubServices}
                isRetainer={isRetainer}
                setIsRetainer={setIsRetainer}
                services={services}
                selectedServices={selectedServices}
                setSelectedSubServices={setSelectedSubServices}
                selectedRetainerSubServices={selectedRetainerSubServices}
                setSelectedRetainerSubServices={setSelectedRetainerSubServices}
              />
            </Carousel.Item>
            <Carousel.Item>
              {/* <h5 className="mb-2">3. Service Period and Termination</h5> */}
              <ServicePeriodAndTermination
                contractStartDate={contractStartDate}
                setContractStartDate={setContractStartDate}
                contractEndDate={contractEndDate}
                setContractEndDate={setContractEndDate}
              />
            </Carousel.Item>
            <Carousel.Item>
              {/* <h5 className="mb-2">4. Fees For Services Performed</h5> */}
              <FeesForServicesPerformed
                isRetainer={isRetainer}
                projectPrice={projectPrice}
                setProjectPrice={setProjectPrice}
                retainerPrice={retainerPrice}
                setRetainerPrice={setRetainerPrice}
                setPaymentOption={setPaymentOption}
              />
            </Carousel.Item>
          </Carousel>
        </div>
      )}

      {currentDocument == "scopeOfWork" && (
        <div id="scope-document-form">
          <div className="bg-dark sticky-top px-4 pb-1 pt-3">
            <h3 className="mb-4">Scope of Work</h3>
            <ProgressBar
              animated
              striped
              now={currentProgress}
              label={`${currentProgress}% Done`}
              className="mb-4"
            />
          </div>
          <Carousel
            className="p-4"
            controls={true}
            indicators={false}
            interval={null}
            activeIndex={index}
            onSelect={handleSelect}
          >
            <Carousel.Item>
              <IdentificationOfTheParties
                projectName={projectName}
                setProjectName={setProjectName}
                businessName={businessName}
                setBusinessName={setBusinessName}
                businessAddress={businessAddress}
                setBusinessAddress={setBusinessAddress}
                services={services}
                setServices={setServices}
                selectedServices={selectedServices}
                setSelectedServices={setSelectedServices}
              />
            </Carousel.Item>
            <Carousel.Item>
              <EngagementAndServices
                selectedSubServices={selectedSubServices}
                isRetainer={isRetainer}
                setIsRetainer={setIsRetainer}
                services={services}
                selectedServices={selectedServices}
                setSelectedSubServices={setSelectedSubServices}
                selectedRetainerSubServices={selectedRetainerSubServices}
                setSelectedRetainerSubServices={setSelectedRetainerSubServices}
              />
            </Carousel.Item>
            <Carousel.Item>
              {/* <h5 className="mb-2">3. Service Period and Termination</h5> */}
              <ServicePeriodAndTermination
                contractStartDate={contractStartDate}
                setContractStartDate={setContractStartDate}
                contractEndDate={contractEndDate}
                setContractEndDate={setContractEndDate}
              />
            </Carousel.Item>
            <Carousel.Item>
              {/* <h5 className="mb-2">4. Fees For Services Performed</h5> */}
              <FeesForServicesPerformed
                isRetainer={isRetainer}
                projectPrice={projectPrice}
                setProjectPrice={setProjectPrice}
                retainerPrice={retainerPrice}
                setRetainerPrice={setRetainerPrice}
                setPaymentOption={setPaymentOption}
              />
            </Carousel.Item>
          </Carousel>
        </div>
      )}
    </Col>
  );
}
