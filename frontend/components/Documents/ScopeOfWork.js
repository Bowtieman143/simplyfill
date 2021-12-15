import Image from "next/image";
import { Row, Col, Table } from "react-bootstrap";
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
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Phase(s)</th>
                  <th>Description</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>One</td>
                  <td>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry&apos;s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </td>
                  <td>12/03/2022</td>
                </tr>
                <tr>
                  <td>Two</td>
                  <td>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry&apos;s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scram.
                  </td>
                  <td>12/03/2022</td>
                </tr>
                <tr>
                  <td>Three</td>
                  <td>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry&apos;s
                    standard dummy text ever since the 1500s.
                  </td>
                  <td>12/03/2022</td>
                </tr>
                <tr>
                  <td>Four</td>
                  <td>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry&apos;s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting.
                  </td>
                  <td>12/03/2022</td>
                </tr>
                <tr>
                  <td>Four</td>
                  <td>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry&apos;s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting.
                  </td>
                  <td>12/03/2022</td>
                </tr>
                <tr>
                  <td>Four</td>
                  <td>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry&apos;s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting.
                  </td>
                  <td>12/03/2022</td>
                </tr>
                <tr>
                  <td>Four</td>
                  <td>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry&apos;s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting.
                  </td>
                  <td>12/03/2022</td>
                </tr>
                <tr>
                  <td>Four</td>
                  <td>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry&apos;s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting.
                  </td>
                  <td>12/03/2022</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    </div>
  );
}
