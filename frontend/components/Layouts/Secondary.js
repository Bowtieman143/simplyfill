import { useState, useEffect, useRef } from "react";
import { Col, Form, Row, Button, Carousel, ProgressBar } from "react-bootstrap";
import EngagementAndServices from "../Forms/Contract/EngagementAndServices";
import FeesForServicesPerformed from "../Forms/Contract/FeesForServicesPerformed";
import IdentificationOfTheParties from "../Forms/Contract/IdentificationOfTheParties";
import ServicePeriodAndTermination from "../Forms/Contract/ServicePeriodAndTermination";
import BusinessDetails from "../Forms/ScopeOfWork/BusinessDetails";

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

  const [contractCarouselIndex, setContractCarouselIndex] = useState(0);
  const [scopeCarouselIndex, setScopeCarouselIndex] = useState(0);
  const [proposalCarouselIndex, setProposalCarouselIndex] = useState(0);
  const [invoiceCarouselIndex, setInvoiceCarouselIndex] = useState(0);

  const contractCarouselHandleSelect = (selectedIndex, e) => {
    setContractCarouselIndex(selectedIndex);
  };

  const scopeCarouselHandleSelect = (selectedIndex, e) => {
    setScopeCarouselIndex(selectedIndex);
  };

  const proposalCarouselHandleSelect = (selectedIndex, e) => {
    setProposalCarouselIndex(selectedIndex);
  };

  const invoiceCarouselHandleSelect = (selectedIndex, e) => {
    setInvoiceCarouselIndex(selectedIndex);
  };

  const contractCarouselCurrentProgress =
    (100 / 4) * (contractCarouselIndex + 1);
  const scopeCarouselCurrentProgress = (100 / 4) * (scopeCarouselIndex + 1);
  const proposalCarouselCurrentProgress =
    (100 / 4) * (proposalCarouselIndex + 1);
  const invoiceCarouselCurrentProgress = (100 / 6) * (invoiceCarouselIndex + 1);

  return (
    <Col md={3} xl={2} id="sidebar" className="bg-dark text-light h-100 p-0">
      {currentDocument == "contract" && (
        <div id="contract-document-form">
          <div className="bg-dark sticky-top px-4 pb-1 pt-3">
            <h3 className="mb-4">Service Agreement</h3>
            <ProgressBar
              animated
              striped
              now={contractCarouselCurrentProgress}
              label={`${contractCarouselCurrentProgress}% Done`}
              className="mb-4"
            />
          </div>
          <Carousel
            className="p-4"
            controls={true}
            indicators={false}
            interval={null}
            activeIndex={contractCarouselIndex}
            onSelect={contractCarouselHandleSelect}
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
              now={scopeCarouselCurrentProgress}
              label={`${scopeCarouselCurrentProgress}% Done`}
              className="mb-4"
            />
          </div>
          <Carousel
            className="p-4"
            controls={true}
            indicators={false}
            interval={null}
            activeIndex={scopeCarouselIndex}
            onSelect={scopeCarouselHandleSelect}
          >
            <Carousel.Item>
              <BusinessDetails
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
              <h1>Hellow thisi s a test here</h1>
            </Carousel.Item>
            <Carousel.Item>
              <h1>Hellow thisi s a test here</h1>
            </Carousel.Item>
            <Carousel.Item>
              {/* <h5 className="mb-2">4. Fees For Services Performed</h5> */}
              <h1>Hellow thisi s a test here</h1>
            </Carousel.Item>
          </Carousel>
        </div>
      )}

      {currentDocument == "proposal" && (
        <div id="proposal-document-form">
          <div className="bg-dark sticky-top px-4 pb-1 pt-3">
            <h3 className="mb-4">Proposal</h3>
            <ProgressBar
              animated
              striped
              now={proposalCarouselCurrentProgress}
              label={`${proposalCarouselCurrentProgress}% Done`}
              className="mb-4"
            />
          </div>
          <Carousel
            className="p-4"
            controls={true}
            indicators={false}
            interval={null}
            activeIndex={proposalCarouselIndex}
            onSelect={proposalCarouselHandleSelect}
          >
            <Carousel.Item>
              <h1>Hellow thisi s a test here</h1>
            </Carousel.Item>
            <Carousel.Item>
              <h1>Hellow thisi s a test here</h1>
            </Carousel.Item>
            <Carousel.Item>
              <h1>Hellow thisi s a test here</h1>
            </Carousel.Item>
            <Carousel.Item>
              {/* <h5 className="mb-2">4. Fees For Services Performed</h5> */}
              <h1>Hellow thisi s a test here</h1>
            </Carousel.Item>
          </Carousel>
        </div>
      )}

      {currentDocument == "invoice" && (
        <div id="invoice-document-form">
          <div className="bg-dark sticky-top px-4 pb-1 pt-3">
            <h3 className="mb-4">Invoice</h3>
            <ProgressBar
              animated
              striped
              now={invoiceCarouselCurrentProgress}
              label={`${invoiceCarouselCurrentProgress}% Done`}
              className="mb-4"
            />
          </div>
          <Carousel
            id="testing-carousel-slides"
            className="p-4"
            controls={true}
            indicators={false}
            interval={null}
            activeIndex={invoiceCarouselIndex}
            onSelect={invoiceCarouselHandleSelect}
          >
            <Carousel.Item>
              <h1>Hellow thisi s a test here</h1>
            </Carousel.Item>
            <Carousel.Item>
              <h1>Hellow thisi s a test here</h1>
            </Carousel.Item>
            <Carousel.Item>
              <h1>Hellow thisi s a test here</h1>
            </Carousel.Item>
            <Carousel.Item>
              <h1>Hellow thisi s a test here</h1>
            </Carousel.Item>
            <Carousel.Item>
              <h1>Hellow thisi s a test here</h1>
            </Carousel.Item>
            <Carousel.Item>
              <h1>Hellow thisi s a test here</h1>
            </Carousel.Item>
          </Carousel>
        </div>
      )}
    </Col>
  );
}
