import { Form } from "react-bootstrap";

export default function FeesForServicesPerformed(props) {
  const {
    isRetainer,
    projectPrice,
    setProjectPrice,
    retainerPrice,
    setRetainerPrice,
    setPaymentOption,
  } = props;

  return (
    <Form className="mb-5">
      <h6 className="mb-3">Project Price</h6>
      <Form.Group className="mb-3" controlId="formsprojectprice">
        <Form.Control
          type="number"
          value={projectPrice}
          onChange={(e) => {
            setProjectPrice(e.target.value);
          }}
        />
      </Form.Group>
      {isRetainer && (
        <>
          <h6 className="mt-4 mb-3">Retainer Price</h6>
          <Form.Group className="mb-3" controlId="formsretainerprice">
            <Form.Control
              type="number"
              value={retainerPrice}
              onChange={(e) => {
                setRetainerPrice(e.target.value);
              }}
            />
          </Form.Group>
        </>
      )}
      <h6 className="mb-3">Payment Options</h6>
      <Form.Group className="mb-3" controlId="formsprojectprice">
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => {
            console.log(e.target.value);
            setPaymentOption(e.target.value);
          }}
        >
          <option>Open this select menu</option>
          <option value={100}>100% Upfront</option>
          <option value={50}>50% Upfront and 50% upon Completion</option>
        </Form.Select>
      </Form.Group>
    </Form>
  );
}
