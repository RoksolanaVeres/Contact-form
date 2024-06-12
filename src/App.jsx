export default function App() {
  return (
    <form className="form" action="">
      <h1 className="form__header">Contact Us</h1>

      <div className="full-name__container">
        <div className="input-label__container">
          <label htmlFor="first-name" className="label">
            First Name <span className="asterisk">*</span>
          </label>
          <input type="text" id="first-name" className="input-field" />
        </div>

        <div className="input-label__container">
          <label htmlFor="last-name" className="label">
            Last Name <span className="asterisk">*</span>
          </label>
          <input type="text" id="last-name" className="input-field" />
        </div>
      </div>

      <div className="input-label__container">
        <label htmlFor="email" className="label">
          Email Address <span className="asterisk">*</span>
        </label>
        <input type="email" id="email" className="input-field" />
      </div>

      <div className="query__container input-label__container">
        <h2 className="label">
          Query Type <span className="asterisk">*</span>
        </h2>
        <div className="query-options__container">
          <label htmlFor="general-enquiry" className="input-field input-field--query">
            <input type="radio" id="general-enquiry" name="query" />
            <span>General Enquiry</span>
          </label>

          <label htmlFor="support-request" className="input-field input-field--query">
            <input type="radio" id="support-request" name="query" />
            <span>Support Request</span>
          </label>
        </div>
      </div>

      <div className="input-label__container">
        <label htmlFor="message" className="label">
          Message <span className="asterisk">*</span>
        </label>
        <textarea id="message" className="input-field input-field--textarea" />
      </div>

      <div className="consent-container">
        <input type="checkbox" id="consent" />
        <label htmlFor="consent">
          I consent to being contacted by the team <span className="asterisk">*</span>
        </label>
      </div>
      <button className="submit-button">Submit</button>
    </form>
  );
}
