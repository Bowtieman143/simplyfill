import Image from "next/image";
import DocumentLogo from "../DocumentLogo";

export default function Invoice(props) {
  const { businessAddress, businessName, currentDate, showCompanyDetails } =
    props;

  return (
    <div id="invoice-container">
      <div id="invoice">
        <DocumentLogo />
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 border-0 padding">
          <div className="card border-0">
            {showCompanyDetails && (
              <div className="card-header bg-white p-0">
                <a
                  className="pt-2 d-inline-block text-primary"
                  href="index.html"
                  data-abc="true"
                >
                  Intangiblemedia.com
                </a>
                <div className="float-right">
                  <h3 className="mb-0">Invoice #BBB10234</h3>
                  <span className="entered-data">{currentDate}</span>
                </div>
              </div>
            )}
            <div className="card-body px-0">
              {showCompanyDetails && (
                <div className="row mb-4">
                  <div className="col-sm-6">
                    <h5 className="mb-3">From:</h5>
                    <h3 className="text-dark mb-1">Intangible Media LLC</h3>
                    <div>2390 E Camelback Rd #130</div>
                    <div>Phoenix, Arizona 85016</div>
                    <div>Email: steven@intangiblemedia.com</div>
                    <div>Phone: 602.802.9766</div>
                  </div>
                  <div className="col-sm-6 ">
                    <h5 className="mb-3">To:</h5>
                    <h3 className="text-dark mb-1">
                      <span className="entered-data">{businessName}</span>
                    </h3>
                    <div>478, Nai Sadak</div>
                    <div>
                      <span className="entered-data">{businessAddress}</span>
                    </div>
                    <div>Email: info@tikon.com</div>
                    <div>Phone: +91 9895 398 009</div>
                  </div>
                </div>
              )}
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
                      <td className="left">Iphone 8X with extended warranty</td>
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
                          <strong className="text-dark">Discount (20%)</strong>
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
            {showCompanyDetails && (
              <div className="card-footer bg-white 0x-0">
                <p className="mb-0">
                  Intangible Media LLC, 2390 E Camelback Rd #130 85016, Phoenix
                  Arizona
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Invoice.defaultProps = {
  showCompanyDetails: true,
  showClientDetails: false,
};
