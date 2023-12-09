import { useState } from "react";
import PageHeader from "./common/pageHeader";
import Input from "./common/input";
import { useFormik } from "formik";
import Joi from "joi";
import { validateFormikUsingJoi } from "../utils/validateFormikUsingJoi";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/auth.context";
import { useAlert } from "../contexts/alert.context";

const SignIn = ({ redirect }) => {
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();
  const { handleAlertChange } = useAlert();

  const { user, login } = useAuth();

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
    },
    validate: validateFormikUsingJoi({
      email: Joi.string()
        .min(5)
        .required()
        .email({ tlds: { allow: false } }),
      password: Joi.string().min(7).max(20).required(),
    }),
    async onSubmit(values) {
      try {
        await login(values);

        if (redirect) {
          handleAlertChange("log in success", "success")
          navigate(redirect);
        }
      } catch (err) {
        if (err.response?.status === 400) {
          setServerError(err.response.data);
          handleAlertChange(err.response.data, "warning")
        }
      }
    },
  });

  const cancelButton = () =>{
    resetForm()
    navigate(redirect);
  }

  const resetForm = () =>{
    form.resetForm();
  }

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <PageHeader title="Login" description="Login to your account" />

      <form onSubmit={form.handleSubmit}>
        {serverError && <div className="alert alert-danger">{serverError}</div>}
    
        <div className="row container-sm col-8 mx-auto">
        <Input
          {...form.getFieldProps("email")}
          type="email"
          label="Email"
          className=" mx-auto col-12 form-floating mb-3 col-6"
          required
          error={form.touched.email && form.errors.email}
          />
        <Input
          {...form.getFieldProps("password")}
          type="password"
          label="Password"
          className=" mx-auto col-12 form-floating mb-3 col-6"
          required
          error={form.touched.password && form.errors.password}
          />
          

        {/* <div className="my-2">
          <button disabled={!form.isValid} className="btn btn-primary" type="submit">
            Sign In
          </button>
        </div> */}
        <div className="col-sm-6 my-2">
          <button className="btn btn-outline-danger form-control" onClick={cancelButton}>
            Cancel
          </button>
          </div>
          <div className="ms-auto col-sm-6 my-2">
          <button className="btn btn-outline-info form-control" onClick={resetForm}>
          <i className="bi bi-arrow-repeat"></i>
          </button>
          </div>
          <div className="mx-auto col-sm-12 col-md-8 col-lg-6 my-2 mb-4">
          <button type="submit" disabled={!form.isValid}
          className={form.isValid? (
            "btn btn-success form-control"
          ):(
            "btn btn-secondary form-control"
          )}
          >
            Login
          </button>
          </div>
          </div>
      </form>
    </>
  );
};

export default SignIn;
