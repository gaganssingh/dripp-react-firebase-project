import "./FormInput.styles.scss";

const FormInput = ({ label, ...otherProps }) => {
  const labelClasses = `${
    otherProps.value.length ? "shrink" : ""
  } form-input-label`;

  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && (
        <label htmlFor={otherProps.name} className={labelClasses}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
