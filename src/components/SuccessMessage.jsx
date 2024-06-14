export default function SuccessMessage({ enteredData }) {
  const { firstName, email } = enteredData;

  return (
    <div
      className="success-message"
    >
      <h2 className="success-header">Message Sent!</h2>
      <p className="success-text">
        Thank you, {firstName}, for completing the form. We'll send you a confirmation letter to
        your email: {email}.
      </p>
    </div>
  );
}
