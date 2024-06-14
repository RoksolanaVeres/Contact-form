import { useState, useEffect } from "react";

export default function SuccessMessage({ enteredData }) {
  const [showSuccess, setShowSuccess] = useState(true);
  const { firstName, email } = enteredData;

  useEffect(() => {
    const timeoutID = setTimeout(() => setShowSuccess(false), 3500);
    return () => clearTimeout(timeoutID);
  }, []);

  return (
    <div
      className={`success-message ${
        showSuccess ? "success-message--visible" : "success-message--hidden"
      }`}
    >
      <h2 className="success-header">Message Sent!</h2>
      <p className="success-text">
        Thank you, {firstName}, for completing the form. We'll send you a confirmation letter to
        your email: {email}.
      </p>
    </div>
  );
}
