import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import DocumentLogo from "../DocumentLogo";

export default function ScopeOfWork(props) {
  const { businessName } = props;
  return (
    <div id="scope-container">
      <div id="scope">
        <DocumentLogo />
        <Row className="mb-5">
          <Col>
            <h5>
              {" "}
              Name of Company:{" "}
              <span className="entered-data fw-normal">Steven Peralta</span>
            </h5>
            <h5>
              Project Name:{" "}
              <span className="entered-data fw-normal">Steven Peralta</span>
            </h5>
            <h5>
              Project Manager:{" "}
              <span className="entered-data fw-normal">Steven Peralta</span>
            </h5>
            <h5>
              Prepared by:{" "}
              <span className="entered-data fw-normal">Steven Peralta</span>
            </h5>
            <h5>
              Date:{" "}
              <span className="entered-data fw-normal">Steven Peralta</span>
            </h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 className="fw-bold mt-4 mb-4">
              Project Description and Deliverables
            </h4>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <h5 className="mb-3">Project Description</h5>
            <p>
              The above demonstrates how flexible the component model can be.
              But if you didn&apos;t want to roll your own versions we&apos;ve
              included a straight-forward that works for most cases.
            </p>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col>
            <h5 className="mb-3">Project Deliverables</h5>
            <p>
              The above demonstrates how flexible the component model can be.
              But if you didn&apos;t want to roll your own versions we&apos;ve
              included a straight-forward that works for most cases.
            </p>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <h4 className="fw-bold">Timeline and Breakdown</h4>
          </Col>
        </Row>
        <Row className="py-3 mb-3">
          <Col>
            <h5 className="mb-2">Phase - One</h5>
            <p>
              The above demonstrates how flexible the component model can be.
              But if you didn&apos;t want to roll your own versions we&apos;ve
              included a straight-forward that works for most cases.
            </p>
          </Col>
          <Col sm={2}>
            <h5 className="mb-2">Date</h5>
            <p>12/03/2001</p>
          </Col>
        </Row>
        <Row className="py-3 mb-3">
          <Col>
            <h5 className="mb-2">Phase - Two</h5>
            <p>
              The above demonstrates how flexible the component model can be.
              But if you didn&apos;t want to roll your own versions we&apos;ve
              included a straight-forward that works for most cases.
            </p>
          </Col>
          <Col md={2}>
            <h5 className="mb-2">Date</h5>
            <p>12/03/2001</p>
          </Col>
        </Row>
        <Row className="py-3 mb-3">
          <Col>
            <h5 className="mb-2">Phase - Three</h5>
            <p>
              The above demonstrates how flexible the component model can be.
              But if you didn&apos;t want to roll your own versions we&apos;ve
              included a straight-forward that works for most cases.
            </p>
          </Col>
          <Col md={2}>
            <h5 className="mb-2">Date</h5>
            <p>12/03/2001</p>
          </Col>
        </Row>
        <Row className="py-3 mb-3">
          <Col>
            <h5 className="mb-2">Phase - Four</h5>
            <p>
              The above demonstrates how flexible the component model can be.
              But if you didn&apos;t want to roll your own versions we&apos;ve
              included a straight-forward that works for most cases.
            </p>
          </Col>
          <Col md={2}>
            <h5 className="mb-2">Date</h5>
            <p>12/03/2001</p>
          </Col>
        </Row>
      </div>
    </div>
  );
}
