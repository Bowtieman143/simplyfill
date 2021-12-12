import { Col, Form, Row, Button } from "react-bootstrap";

export default function FeesForServicesPerformed(props) {
  const { isRetainer, projectPrice, paymentOption } = props;

  return (
    <li>
      <h5>FEES FOR SERVICES PERFORMED</h5>
      <ol>
        <li>
          <p>
            Payment is to be made via Electronic Bank Transfer (Zelle) / Check /
            Debit Card / Credit Card within 3 working days on receipt of invoice
            to the following account details: Zelle - Steven@intangiblemedia.com
            / Check - Intangible Media
          </p>
          <ol>
            <li>
              <p>
                The Client agrees to pay the Service Provider a transaction fee
                of 5% if using a Debit Card or Credit card.
              </p>
            </li>
          </ol>
        </li>
        <li>
          <p>Project Based Work:</p>
          <ol>
            <li>
              <p>
                The Client agrees to pay the Service Provider a project fee of{" "}
                <span className="contract-alteration">{`$${projectPrice}`}</span>
                . The Service Provider’s obligation to render the Services
                mentioned in Section 2 of this Agreement is conditional upon
                payment by the Client in the following terms (the ‘Project Based
                Schedule’):
              </p>
              <ol>
                {paymentOption == 100 && (
                  <li>
                    <p>
                      <span className="contract-alteration">
                        100% upfront payment upon receipt of Invoice.
                      </span>
                    </p>
                  </li>
                )}
                {paymentOption == 50 && (
                  <>
                    <li>
                      <p>
                        <span className="contract-alteration">
                          50% down payment upon receipt of Invoice (the ‘Down
                          Payment’).
                        </span>
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="contract-alteration">
                          The remaining 50% is to be paid upon completion of the
                          website
                        </span>
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="contract-alteration">
                          The completion of the project is described hereunder:
                        </span>
                      </p>
                      <ul className="dotted-list">
                        <li>
                          <p>
                            <span className="contract-alteration">
                              Fully functional conversion-focused e-commerce
                              website (up to 50 products).
                            </span>
                          </p>
                        </li>
                        <li>
                          <p>
                            <span className="contract-alteration">
                              Optimizing each page for on-page SEO.
                            </span>
                          </p>
                        </li>
                        <li>
                          <p>
                            <span className="contract-alteration">
                              Marketing campaigns for AdWords and Social Media
                              (Facebook).
                            </span>
                          </p>
                        </li>
                      </ul>
                    </li>
                  </>
                )}
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
        {isRetainer && (
          <li>
            <p>
              <span className="contract-alteration">Retainer based work</span>
            </p>
            <ol>
              <li>
                <p>
                  <span className="contract-alteration">
                    In consideration for Services rendered, the Client agrees to
                    pay the Service Provider’s fee of [$850.00] which will be
                    due up front on the first of each month for that month’s
                    Services until the Agreement has ended.
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <span className="contract-alteration">
                    If such amount is not received by this date, the Service
                    Provider reserves the right to cease provision of Services
                    to the Client. If a portion of an outstanding fee remains
                    unpaid for more than 14 days after becoming due, a penalty
                    of 15% of the outstanding amount will become due and
                    payable.
                  </span>
                </p>
              </li>
            </ol>
          </li>
        )}
        {/* <li>
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
        </li> */}
      </ol>
    </li>
  );
}
