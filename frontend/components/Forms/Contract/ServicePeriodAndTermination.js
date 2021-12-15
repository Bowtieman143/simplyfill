import { Form } from "react-bootstrap";

export default function ServicePeriodAndTermination(props) {
  const {
    contractStartDate,
    setContractStartDate,
    contractEndDate,
    setContractEndDate,
  } = props;

  return (
    <Form className="mb-5">
      <h6 className="mb-3">Contract Start Date</h6>
      <Form.Group className="mb-3" controlId="formstartdate">
        <Form.Control
          type="date"
          value={contractStartDate}
          onChange={(e) => {
            setContractStartDate(e.target.value);
          }}
        />
      </Form.Group>
      <h6 className="mt-4 mb-3">Contract End Date</h6>
      <Form.Group className="mb-3" controlId="formenddate">
        <Form.Control
          type="date"
          value={contractEndDate}
          onChange={(e) => {
            setContractEndDate(e.target.value);
          }}
        />
      </Form.Group>
    </Form>
  );
}
