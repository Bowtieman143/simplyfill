import { Col, Form, Row, Button } from "react-bootstrap";

export default function LimitationOfLiability(props) {
  return (
    <li>
      <h5>LIMITATION OF LIABILITY</h5>
      <ol>
        <li>
          <p>
            In no event shall the Service Provider be liable to the Client for
            any loss of profit, loss of business, loss of data, or for any
            indirect, incidental, consequential, special or exemplary damages
            arising in connection with the services provided to client or any
            agreement between the parties relating thereto (whether based on
            breach of contract, breach of warranty, negligence or any other
            legal theory), even if the Service Provider has been advised of the
            possibility of such damages.
          </p>
        </li>
        <li>
          <p>
            The entire liability of the Service Provider to the Client in
            connection with the Services provided to the Client and any
            agreement between the parties relating thereto (whether based on
            breach of contract, breach of warranty, negligence or any other
            legal theory) shall not exceed, in the aggregate, the total amount
            of fees paid or becoming due under this Agreement in the twelve (12)
            month period immediately preceding the event giving rise to such
            liability.
          </p>
        </li>
        <li>
          <p>
            The above mentioned limitations in this section of the Agreement
            shall not apply to a breach of confidentiality or a breach of one’s
            rights or obligations under the transfer of intellectual property
            rights as set out in section 7.
          </p>
        </li>
      </ol>
    </li>
  );
}
