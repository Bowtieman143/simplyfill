import { Col, Form, Row, Button } from "react-bootstrap";

export default function ObligationsOfTheClient(props) {
  return (
    <li>
      <h5>OBLIGATIONS OF THE CLIENT</h5>
      <ol>
        <li>
          <p>
            The Service Provider will not commence work until the Client has
            provided all the necessary data, photography, tools and other
            necessary information that may be required by the Service Provider
            to effectively perform the Services rendered.
          </p>
        </li>
        <li>
          <p>
            The Client agrees that the completion of one or more of the
            deliverables may depend on and require the Client&apos;s commitment of
            certain resources which should be promptly provided. The Client
            agrees to provide such resources as are necessary to fulfil the
            Service Provider&apos;s and its own obligations under this Agreement and
            to timely complete and fulfil its required actions in order for the
            Service Provider to be able to fully comply with its obligations
            under this Agreement. The Client&apos;s failure to provide such resources
            and to timely fulfil such obligations shall not constitute a basis
            for the retention of payments and/or allegations of breach of
            contract by the Client.
          </p>
        </li>
      </ol>
    </li>
  );
}
