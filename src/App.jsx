import { useRef, useState } from "react";
import { Input, RadioInput } from "./components/Input";
import { useFormValidation } from "./useFormValidation";
import SuccessMessage from "./components/SuccessMessage";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const { formIsValid, invalidFields, validateField } = useFormValidation({});
  const [enteredData, setEnteredData] = useState({});
  const [successIsVisible, setSuccessIsVisible] = useState(true);

  const form = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    setSuccessIsVisible(true);

    const fd = new FormData(e.target);
    const enteredData = Object.fromEntries(fd.entries());
    setEnteredData(enteredData);

    validateField(
      "firstName",
      enteredData.firstName.trim(),
      (value) => value !== "",
      "This field is required"
    );

    validateField(
      "lastName",
      enteredData.lastName.trim(),
      (value) => value !== "",
      "This field is required"
    );

    validateField(
      "email",
      enteredData.email,
      (value) => value.includes("@"),
      "Please, enter a valid email address"
    );

    validateField("query", enteredData.query, (value) => !!value, "Please, select a query type");
    validateField(
      "message",
      enteredData.message.trim(),
      (value) => value !== "",
      "This field is required"
    );

    validateField(
      "consent",
      enteredData.consent,
      (value) => !!value,
      "To submit this form, please consent to being contacted"
    );
  }

  console.log("entered data", enteredData);

  if (formIsValid) {
    form.current.reset();
    setTimeout(() => {
      setSuccessIsVisible(false);
    }, 3000);
  }

  return (
    <div className="main-container">
      <form className="form" action="" onSubmit={handleSubmit} ref={form}>
        <h1 className="form__header">Contact Us</h1>

        <div className="full-name__container">
          <Input
            label="First Name"
            id="firstName"
            type="text"
            name="firstName"
            error={invalidFields.firstName}
          />
          <Input
            label="Last Name"
            id="lastName"
            type="text"
            name="lastName"
            error={invalidFields.lastName}
          />
        </div>
        <Input
          label="Email Address"
          id="email"
          type="email"
          name="email"
          error={invalidFields.email}
        />

        <fieldset className="query__container">
          <legend className="label">
            Query Type <span className="asterisk">*</span>
          </legend>
          <div className="query-options__container">
            <RadioInput
              label="General Enquiry"
              id="generalEnquiry"
              name="query"
              value="generalEnquiry"
            />
            <RadioInput
              label="Support Request"
              id="supportRequest"
              name="query"
              value="supportRequest"
            />
          </div>
          {invalidFields.query && <p className="error-text">{invalidFields.query}</p>}
        </fieldset>

        <div className="input-label__container">
          <label htmlFor="message" className="label">
            Message <span className="asterisk">*</span>
          </label>
          <textarea id="message" className="input-field input-field--textarea" name="message" />
          {invalidFields.message && <p className="error-text">{invalidFields.message}</p>}
        </div>

        <div className="consent-container">
          <input type="checkbox" id="consent" name="consent" className="checkbox-input" />
          <label htmlFor="consent" className="consent-text">
            I consent to being contacted by the team <span className="asterisk">*</span>
          </label>
          {invalidFields.consent && (
            <p className="error-text error-text--two-lines">{invalidFields.consent}</p>
          )}
        </div>
        <button className="submit-button">Submit</button>
      </form>

      <AnimatePresence>
        {formIsValid && successIsVisible && <SuccessMessage enteredData={enteredData} />}
      </AnimatePresence>
    </div>
  );
}
