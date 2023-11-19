const Input = ({ label, error, classAdd, ...rest }) => {
  return (
    <>
    <div className='form-floating mb-3 col-6'>
      <input
        {...rest}
        id={rest.name}
        placeholder=" "
        className={["form-control", error && "is-invalid"]
          .filter(Boolean)
          .join(" ")}
      />
      <label htmlFor={rest.name} className="ms-2">
        {label}
        {rest.required && <span className="text-danger ms-1">*</span>}
      </label>
      <span className="invalid-feedback">{error}</span>
    </div>
    </>
  );
};

export default Input;
