export function Input({ label, id, error, ...props }) {
  return (
    <div className="input-label__container">
      <label htmlFor={id} className="label">
        {label} <span className="asterisk">*</span>
      </label>
      <input id={id} className={`${error && "error-outline"} input-field`} {...props} />
      {error && <p className="error-text">{error}</p>}
    </div>
  );
}

export function RadioInput({ label, id, ...props }) {
  return (
    <label htmlFor={id} className="input-field input-field--query">
      <input type="radio" id={id} {...props} />
      <span>{label}</span>
    </label>
  );
}
