import { useState } from "react";
import { Input, RadioInput } from "./components/Input";

export default function App() {
  const [invalidFields, setInvalidFields] = useState({});

  function handleSubmit(e) {
    e.preventDefault();

    const fd = new FormData(e.target);
    const enteredData = Object.fromEntries(fd.entries());

    const firstNameisInvalid = enteredData.firstName.trim() === "";
    const lastNameisInvalid = enteredData.lastName.trim() === "";
    const emailIsInvalid = !enteredData.email.includes("@");
    const queryTypeIsInvalid = !("query" in enteredData);
    const messageisInvalid = enteredData.message.trim() === "";
    const consentIsInvalid = !("consent" in enteredData);

    if (firstNameisInvalid) {
      setInvalidFields((currentErrors) => ({
        ...currentErrors,
        firstName: "This field is required",
      }));
    } else {
      setInvalidFields((currentErrors) => {
        const updatedErrors = { ...currentErrors };
        delete updatedErrors.firstName;
        return updatedErrors;
      });
    }

    if (lastNameisInvalid) {
      setInvalidFields((currentErrors) => ({
        ...currentErrors,
        lastName: "This field is required",
      }));
    } else {
      setInvalidFields((currentErrors) => {
        const updatedErrors = { ...currentErrors };
        delete updatedErrors.lastName;
        return updatedErrors;
      });
    }

    if (emailIsInvalid) {
      setInvalidFields((currentErrors) => ({
        ...currentErrors,
        email: "Please, enter a valid email address",
      }));
    } else {
      setInvalidFields((currentErrors) => {
        const updatedErrors = { ...currentErrors };
        delete updatedErrors.email;
        return updatedErrors;
      });
    }

    if (queryTypeIsInvalid) {
      setInvalidFields((currentErrors) => ({
        ...currentErrors,
        query: "Please, select a query type",
      }));
    } else {
      setInvalidFields((currentErrors) => {
        const updatedErrors = { ...currentErrors };
        delete updatedErrors.query;
        return updatedErrors;
      });
    }

    if (messageisInvalid) {
      setInvalidFields((currentErrors) => ({
        ...currentErrors,
        message: "This field is required",
      }));
    } else {
      setInvalidFields((currentErrors) => {
        const updatedErrors = { ...currentErrors };
        delete updatedErrors.message;
        return updatedErrors;
      });
    }

      if (consentIsInvalid) {
        setInvalidFields((currentErrors) => ({
          ...currentErrors,
          consent: "To submit this form, please consent to being contacted",
        }));
      } else {
        setInvalidFields((currentErrors) => {
          const updatedErrors = { ...currentErrors };
          delete updatedErrors.consent;
          return updatedErrors;
        });
      }
  }

  return (
    <form className="form" action="" onSubmit={handleSubmit}>
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
        <input type="checkbox" id="consent" name="consent" />
        <label htmlFor="consent">
          I consent to being contacted by the team <span className="asterisk">*</span>
        </label>
        {invalidFields.consent && <p className="error-text error-text--two-lines">{invalidFields.consent}</p>}
      </div>
      <button className="submit-button">Submit</button>
    </form>
  );
}
