import { useEffect } from "react";
import Image from "next/image";
import { Row, Col, Table } from "react-bootstrap";
import DocumentLogo from "../DocumentLogo";

export default function ScopeOfWork(props) {
  const {
    businessName,
    currentDate,
    projectName,
    businessAddress,
    projectPhases,
  } = props;

  useEffect(() => {
    console.log(projectPhases);
  }, []);

  return (
    <div id="scope-container">
      <div id="scope">
        <DocumentLogo />
        <Row className="mb-3">
          <Col>
            <h6>
              {" "}
              Name of Company:{" "}
              <span className="entered-data fw-normal">{businessName}</span>
            </h6>
            <h6>
              Project Name:{" "}
              <span className="entered-data fw-normal">{projectName}</span>
            </h6>
            <h6>
              Project Manager:{" "}
              <span className="entered-data fw-normal">Steven Peralta</span>
            </h6>
            <h6>
              Prepared by:{" "}
              <span className="entered-data fw-normal">Steven Peralta</span>
            </h6>
            <h6>
              Date:{" "}
              <span className="entered-data fw-normal">{currentDate}</span>
            </h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6 className="fw-bold mt-4 mb-4">
              Project Description and Deliverables
            </h6>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Phase(s)</th>
                  <th>Description</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {projectPhases.map((projectPhase, index) => (
                  <tr>
                    <td>Phase {index}</td>
                    <td>{projectPhase.description}</td>
                    <td>{projectPhase.date}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    </div>
  );
}
