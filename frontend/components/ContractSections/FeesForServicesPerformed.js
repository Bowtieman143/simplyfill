import { Col, Form, Row, Button } from "react-bootstrap";

export default function FeesForServicesPerformed(props) {
  return (
    <li>
      <h5>FEES FOR SERVICES PERFORMED</h5>
      <ol>
        <li>
          <p>
            Payment is to be made via [PayPal / Freshbooks / Electronic Bank
            Transfer / Transferwise, etc.] within 3 working days on receipt of
            invoice to the following account details: [Insert your bank details
            or your account name]
          </p>
        </li>
        <li>
          <p>Project Based Work:</p>
          <ol>
            <li>
              <p>
                The Client agrees to pay the Service Provider a project fee of
                [$3,500.00]. The Service Provider’s obligation to render the
                Services mentioned in Section 2 of this Agreement is conditional
                upon payment by the Client in the following terms (the ‘Project
                Based Schedule’):
              </p>
              <ol>
                <li>
                  <p>100% upfront payment upon receipt of Invoice.</p>
                </li>
                <li>
                  <p>
                    50% down payment upon receipt of Invoice (the ‘Down
                    Payment’).
                  </p>
                </li>
                <li>
                  <p>
                    The remaining 50% is to be paid upon completion of the
                    website OR on [date].
                  </p>
                </li>
                <li>
                  <p>The completion of the project is described hereunder:</p>
                  <ul className="dotted-list">
                    <li>
                      <p>
                        Fully functional conversion-focused e-commerce website
                        (up to 50 products).
                      </p>
                    </li>
                    <li>
                      <p>Optimizing each page for on-page SEO.</p>
                    </li>
                    <li>
                      <p>
                        Marketing campaigns for AdWords and Social Media
                        (Facebook).
                      </p>
                    </li>
                  </ul>
                </li>
              </ol>
            </li>
            <li>
              <p>
                If during any time of the project duration the Client fails to
                make payment in terms of the Project Based Schedule, the Service
                Provider may cease provision of the Services until payment of
                the outstanding fee has been made. If a portion of such
                outstanding fee remains unpaid for more than 14 days after
                becoming due, a penalty of 15% of the outstanding amount will
                become due and payable. The Service Provider is not obligated to
                provide Services to the Client if there are any outstanding fees
                or penalties remaining due and payable.
              </p>
            </li>
          </ol>
        </li>
        <li>
          <p>Retainer based work</p>
          <ol>
            <li>
              <p>
                In consideration for Services rendered, the Client agrees to pay
                the Service Provider’s fee of [$850.00] which will be due up
                front on the first of each month for that month’s Services until
                the Agreement has ended.
              </p>
            </li>
            <li>
              <p>
                If such amount is not received by this date, the Service
                Provider reserves the right to cease provision of Services to
                the Client. If a portion of an outstanding fee remains unpaid
                for more than 14 days after becoming due, a penalty of 15% of
                the outstanding amount will become due and payable.
              </p>
            </li>
          </ol>
        </li>
        <li>
          <p>Advertising fees</p>
          <ol>
            <li>
              <p>
                All advertising fees, such as Google Ads, Facebook Ads, and any
                other related advertising fees, are for the Client’s account.
              </p>
            </li>
            <li>
              <p>
                The Client is committed to spend a minimum of [$1,000.00] for
                Google Ads and [$500.00] for Facebook Ads each month, for the
                validity of this Agreement.
              </p>
            </li>
          </ol>
        </li>
      </ol>
    </li>
  );
}
