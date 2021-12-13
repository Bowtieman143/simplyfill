import { Col, Form, Row, Button } from "react-bootstrap";

export default function Warranties(props) {
  return (
    <li>
      <h5>WARRANTIES</h5>
      <ol>
        <li>
          <p>
            The Service Provider warrants and represents that it has full
            capacity and authority to enter into the Agreement and that the
            Services performed by the Service Provider, or any third party
            instructed by the Service Provider, will be rendered in accordance
            with sound professional practices and in a competent manner of the
            level of capability represented to the Client.
          </p>
        </li>
        <li>
          <p>
            The Client warrants and represents that it has full capacity and
            authority to enter into the Agreement and has the ability, including
            relevant permissions, licences and consents necessary to perform its
            obligations in terms of the Agreement.
          </p>
        </li>
        <li>
          <p>
            Except as provided for in this Agreement, the Parties make no
            further warranties either expressly or impliedly.
          </p>
        </li>
      </ol>
    </li>
  );
}
