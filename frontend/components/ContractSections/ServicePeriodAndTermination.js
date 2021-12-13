import { Col, Form, Row, Button } from "react-bootstrap";

export default function ServicePeriodAndTermination(props) {
  const {
    currentDate,
    currentMonth,
    businessAddress,
    contractStartDate,
    contractEndDate,
  } = props;

  return (
    <li>
      <h5 id="contract-section-three">SERVICE PERIOD AND TERMINATION</h5>
      <ol>
        <li>
          <p>
            This Service Agreement (the &apos;Agreement&apos;) is made and entered into on
            this day of{" "}
            <span className="entered-data">{currentMonth}</span> (the
            &apos;Effective Date&apos;) by and between with its registered address at{" "}
            <span className="entered-data">{businessAddress}</span> (the
            &apos;Client&apos;) and Intangible Media LLC (the &apos;Service Provider&apos;).
            <br />
            <br />
            This Agreement shall commence on{" "}
            <span className="entered-data">{contractStartDate}</span> and
            shall terminate on{" "}
            <span className="entered-data">{contractEndDate}</span>.
          </p>
        </li>
        <li>
          <p>
            Either party may elect to terminate the Agreement by providing at
            least one months&apos; notice (30 calendar days) to the other Party. Such
            notice must be in writing. Payment for the Services performed to
            date are not recoverable upon termination. Termination does not
            preclude the Client from payment of Services to the date of
            termination and up to the final day of the month in which the
            agreement is terminated. Any expenses incurred by the Service
            Provider or to be incurred on behalf of the Client at the date of
            learning of the termination will still be due and payable.
          </p>
        </li>
        <li>
          <p>
            Either Party will be informed in writing of any change in the
            Service Agreement at least one month in advance of the termination
            of a service.
          </p>
        </li>
        <li>
          <p>
            Upon the effective date of termination of this Agreement, all legal
            obligations, rights and duties arising out of this Agreement shall
            terminate except for such legal obligations, rights and duties as
            shall have accrued prior to the effective date of termination and
            except as otherwise stated in this Agreement.
          </p>
        </li>
      </ol>
    </li>
  );
}
