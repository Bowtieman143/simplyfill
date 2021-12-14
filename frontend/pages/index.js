import { useState } from "react";
import Head from "next/head";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Navigation from "../components/Navigation";
// import Primary from "../components/Primary";
// import Sidebar from "../components/Sidebar";

export default function Index() {
  const [isRetainer, setIsRetainer] = useState(false);
  const [retainerPrice, setRetainerPrice] = useState(0)
  const [projectPrice, setProjectPrice] = useState(0)
  const [paymentOption, setPaymentOption] = useState(100)
  const [projectName, setProjectName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [contractStartDate, setContractStartDate] = useState("");
  const [contractEndDate, setContractEndDate] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedSubServices, setSelectedSubServices] = useState([]);
  const [selectedRetainerSubServices, setSelectedRetainerSubServices] =
    useState([]);
  const [services, setServices] = useState([
    {
      name: "Website Development",
      subServices: [
        "Hosting",
        "Google Analytics Setup",
        "Monthly Mantainace",
        "Custom Child Theme",
        "Develop Webpages Based on Mockup Designs",
      ],
    },
    {
      name: "Graphic Design",
      subServices: [
        "Logo Design",
        "Brand Guide",
        "Website Mockups",
        "Website Prototypes",
        "1 Hour Website Consultation",
      ],
    },
    {
      name: "Photography",
      subServices: ["Headshots", "Interior Shots", "Exterior Shots"],
    },
    {
      name: "Videography",
      subServices: ["30 Second Promotional Video", "5 Minute Video"],
    },
  ]);

  return (
    <div>
      <Head>
        <title>Contract Genorator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container fluid>
        <Row className="bg-dark">
          <Col>
            <Navigation />
          </Col>
        </Row>
        <Row id="generator-container">
          {/* <Sidebar
            businessName={businessName}
            setBusinessName={setBusinessName}
            projectName={projectName}
            setProjectName={setProjectName}
            businessAddress={businessAddress}
            setBusinessAddress={setBusinessAddress}
            services={services}
            setServices={setServices}
            selectedServices={selectedServices}
            setSelectedServices={setSelectedServices}
            selectedSubServices={selectedSubServices}
            setSelectedSubServices={setSelectedSubServices}
            isRetainer={isRetainer}
            setIsRetainer={setIsRetainer}
            selectedRetainerSubServices={selectedRetainerSubServices}
            setSelectedRetainerSubServices={setSelectedRetainerSubServices}
            contractStartDate={contractStartDate}
            setContractStartDate={setContractStartDate}
            contractEndDate={contractEndDate}
            setContractEndDate={setContractEndDate}
            projectPrice={projectPrice}
            setProjectPrice={setProjectPrice}
            paymentOption={paymentOption}
            setPaymentOption={setPaymentOption}
            retainerPrice={retainerPrice}
            setRetainerPrice={setRetainerPrice}
          />
          <Primary
            businessName={businessName}
            projectName={projectName}
            businessAddress={businessAddress}
            selectedServices={selectedServices}
            selectedSubServices={selectedSubServices}
            isRetainer={isRetainer}
            selectedRetainerSubServices={selectedRetainerSubServices}
            contractStartDate={contractStartDate}
            contractEndDate={contractEndDate}
            projectPrice={projectPrice}
            paymentOption={paymentOption}
            retainerPrice={retainerPrice}
          /> */}
        </Row>
      </Container>
    </div>
  );
}
