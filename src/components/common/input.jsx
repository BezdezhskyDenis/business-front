const Input = ({ label, error, classAdd, ...rest }) => {
  return (
    <>
<<<<<<< HEAD
    <div className={rest.className ? (rest.className):('form-floating mb-3 col-6')}>
=======
    <div className='form-floating mb-3 col-6'>
>>>>>>> 481e32ff7ceb6f59cd88fa3e29ea3b00c1b9ba47
      <input
        {...rest}
        id={rest.name}
        placeholder=" "
<<<<<<< HEAD
        className={rest.inputclassname? (rest.inputclassname):(["form-control", error && "is-invalid"]
          .filter(Boolean)
          .join(" "))}
      />
      <label htmlFor={rest.name} className={ rest.labelclassname || "ms-2"}>
=======
        className={["form-control", error && "is-invalid"]
          .filter(Boolean)
          .join(" ")}
      />
      <label htmlFor={rest.name} className="ms-2">
>>>>>>> 481e32ff7ceb6f59cd88fa3e29ea3b00c1b9ba47
        {label}
        {rest.required && <span className="text-danger ms-1">*</span>}
      </label>
      <span className="invalid-feedback">{error}</span>
    </div>
    </>
  );
};

export default Input;
