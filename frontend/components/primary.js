import { useState } from "react";
import { Col, Form, Row, NavDropdown, Nav } from "react-bootstrap";
import IdentificationOfTheParties from "./ContractSections/IdentificationOfTheParties";
import EngagementAndServices from "./ContractSections/EngagementAndServices";
import ServicePeriodAndTermination from "./ContractSections/ServicePeriodAndTermination";
import FeesForServicesPerformed from "./ContractSections/FeesForServicesPerformed";
import ObligationsOfTheClient from "./ContractSections/ObligationsOfTheClient";
import OwnershipAndRisk from "./ContractSections/OwnershipAndRisk";
import ConfidentialityAndResponsibility from "./ContractSections/ConfidentialityAndResponsibility";
import NoCompetition from "./ContractSections/NoCompetition";
import Warranties from "./ContractSections/Warranties";
import IndependentContractors from "./ContractSections/IndependentContractors";
import LimitationOfLiability from "./ContractSections/LimitationOfLiability";
import TransferOfIntellectualPropertyRights from "./ContractSections/TransferOfIntellectualPropertyRights";
import Assignment from "./ContractSections/Assignment";
import GoverningLawAndDisputeResolution from "./ContractSections/GoverningLawAndDisputeResolution";
import RecoveryOfLitigationExpenses from "./ContractSections/RecoveryOfLitigationExpenses";
import General from "./ContractSections/General";
import Severability from "./ContractSections/Severability";

export default function Sidebar(props) {
  const [currentDocument, setCurrentDocument] = useState("contract");

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let currentDate = new Date();
  const dd = String(currentDate.getDate()).padStart(2, "0");
  const mm = String(currentDate.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = currentDate.getFullYear();
  const currentMonth = monthNames[new Date().getMonth()];
  currentDate = mm + "/" + dd + "/" + yyyy;

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
  } = props;

  return (
    <Col md={9} id="primary" className="pt-0">
      <Nav
        variant="pills"
        className="justify-content-center py-4 mb-4"
        defaultActiveKey="1"
      >
        <Nav.Item>
          <Nav.Link
            eventKey="1"
            onClick={() => {
              setCurrentDocument("contract");
            }}
          >
            Service Agreement
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="2"
            onClick={() => {
              setCurrentDocument("scopeOfWork");
            }}
          >
            Scope of Work
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="3"
            onClick={() => {
              setCurrentDocument("proposal");
            }}
          >
            Proposal
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="4"
            onClick={() => {
              setCurrentDocument("invoice");
            }}
          >
            Invoice
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {currentDocument === "proposal" && (
        <div id="proposal-container">
          <h2 className="text-center mb-5">Proposal - {businessName}</h2>

          <div id="proposal">
            <img
              alt=""
              src="/logo-dark.png"
              width="180"
              className="d-inline-block align-top"
            />
          </div>
        </div>
      )}

      {currentDocument === "invoice" && (
        <div id="invoice-container">
          <h2 className="text-center mb-5">Invoice - {businessName}</h2>

          <div id="invoice">
            <img
              alt=""
              src="/logo-dark.png"
              width="180"
              className="d-inline-block align-top"
            />

            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 border-0 padding">
              <div className="card border-0">
                <div className="card-header bg-white p-0">
                  <a
                    className="pt-2 d-inline-block"
                    href="index.html"
                    data-abc="true"
                  >
                    BBBootstrap.com
                  </a>
                  <div className="float-right">
                    <h3 className="mb-0">Invoice #BBB10234</h3>
                    Date: 12 Jun,2019
                  </div>
                </div>
                <div className="card-body px-0">
                  <div className="row mb-4">
                    <div className="col-sm-6">
                      <h5 className="mb-3">From:</h5>
                      <h3 className="text-dark mb-1">Tejinder Singh</h3>
                      <div>29, Singla Street</div>
                      <div>Sikeston,New Delhi 110034</div>
                      <div>Email: contact@bbbootstrap.com</div>
                      <div>Phone: +91 9897 989 989</div>
                    </div>
                    <div className="col-sm-6 ">
                      <h5 className="mb-3">To:</h5>
                      <h3 className="text-dark mb-1">Akshay Singh</h3>
                      <div>478, Nai Sadak</div>
                      <div>Chandni chowk, New delhi, 110006</div>
                      <div>Email: info@tikon.com</div>
                      <div>Phone: +91 9895 398 009</div>
                    </div>
                  </div>
                  <div className="table-responsive-sm">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th className="center">#</th>
                          <th>Item</th>
                          <th>Description</th>
                          <th className="right">Price</th>
                          <th className="center">Qty</th>
                          <th className="right">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="center">1</td>
                          <td className="left strong">Iphone 10X</td>
                          <td className="left">Iphone 10X with headphone</td>
                          <td className="right">$1500</td>
                          <td className="center">10</td>
                          <td className="right">$15,000</td>
                        </tr>
                        <tr>
                          <td className="center">2</td>
                          <td className="left">Iphone 8X</td>
                          <td className="left">
                            Iphone 8X with extended warranty
                          </td>
                          <td className="right">$1200</td>
                          <td className="center">10</td>
                          <td className="right">$12,000</td>
                        </tr>
                        <tr>
                          <td className="center">3</td>
                          <td className="left">Samsung 4C</td>
                          <td className="left">
                            Samsung 4C with extended warranty
                          </td>
                          <td className="right">$800</td>
                          <td className="center">10</td>
                          <td className="right">$8000</td>
                        </tr>
                        <tr>
                          <td className="center">4</td>
                          <td className="left">Google Pixel</td>
                          <td className="left">
                            Google prime with Amazon prime membership
                          </td>
                          <td className="right">$500</td>
                          <td className="center">10</td>
                          <td className="right">$5000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="row">
                    <div className="offset-lg-6 col-lg-6 col-sm-5 mr-auto">
                      <table className="table table-clear">
                        <tbody>
                          <tr>
                            <td className="left">
                              <strong className="text-dark">Subtotal</strong>
                            </td>
                            <td className="right">$28,809,00</td>
                          </tr>
                          <tr>
                            <td className="left">
                              <strong className="text-dark">
                                Discount (20%)
                              </strong>
                            </td>
                            <td className="right">$5,761,00</td>
                          </tr>
                          <tr>
                            <td className="left">
                              <strong className="text-dark">VAT (10%)</strong>
                            </td>
                            <td className="right">$2,304,00</td>
                          </tr>
                          <tr>
                            <td className="left">
                              <strong className="text-dark">Total</strong>{" "}
                            </td>
                            <td className="right">
                              <strong className="text-dark">$20,744,00</strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="card-footer bg-white 0x-0">
                  <p className="mb-0">
                    BBBootstrap.com, Sounth Block, New delhi, 110034
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {currentDocument === "scopeOfWork" && (
        <div id="scope-of-work-container">
          <h2 className="text-center mb-5">Scope of Work - {businessName}</h2>

          <div id="scope">
            <img
              alt=""
              src="/logo-dark.png"
              width="180"
              className="d-inline-block align-top"
            />
          </div>
        </div>
      )}

      {currentDocument === "contract" && (
        <div id="contract-container">
          <h2 className="text-center mb-5">
            Service Agreement - {businessName}
          </h2>
          <div id="contract">
            <img
              alt=""
              src="/logo-dark.png"
              width="180"
              className="d-inline-block align-top"
            />
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
      )}
    </Col>
  );
}
