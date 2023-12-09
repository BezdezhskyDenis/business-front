import { validateFormikUsingJoi } from "../utils/validateFormikUsingJoi";
import Input from "./common/input";
import PageHeader from "./common/pageHeader";
import { Navigate, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Joi from "joi";
import { useState } from "react";
import { useAuth } from "../contexts/auth.context";

const SignUp = ({ redirect }) => {
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  const { signUp, user } = useAuth();

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      name:{
        first:"",
        middle:"",
        last:"",
      },
      phone:"",
      email: "",
      password: "",
      image:{
        url: "",
        alt: "",
      },
      address:{
        state: "",
        country: "",
        city: "",
        street: "",
        houseNumber: "",
        zip: "",
      },
      isBusiness: false
    },
    validate: validateFormikUsingJoi({
      name: Joi.object({
        first: Joi.string().min(2).max(256).required(),
        middle: Joi.string().min(2).max(256).allow(""),
        last: Joi.string().min(2).max(256).required(),
      }).required(),
      image: Joi.object({
        url: Joi.string().min(14).allow(""),
        alt: Joi.string().min(2).max(256).allow(""),
      }).allow({}),
      phone: Joi.string().min(9).max(11).required(),
      email: Joi.string()
      .min(5)
      .max(256)
      .required()
      .email({ tlds: { allow: false } }),
      password: Joi.string()
      .min(7)
      .max(20)
      .pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*]).*$/)
      .message('Password must be at least 7 characters long, contain at least one uppercase letter, and include one of the following special characters: !@#$%^&*')
      .required(),
      address: Joi.object({
        state: Joi.string().min(2).max(256).allow(""),
        country: Joi.string().min(2).max(256).required(),
        city: Joi.string().min(2).max(256).required(),
        street: Joi.string().min(2).max(256).required(),
        houseNumber: Joi.number().min(1).max(256).required(),
        zip: Joi.number().min(2).max(256).required(),
      }).required(),
        isBusiness: Joi.boolean()
    }),
    async onSubmit(values) {
      
      try {
        await signUp({ ...values});
        if (redirect) {
          navigate(redirect);
        }
      } catch (err) {
        if (err.response?.status === 400) {
          setServerError(err.response.data);
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
      <PageHeader
        title="REGISTRATION"
      />

      <form onSubmit={form.handleSubmit}>
        {serverError && <div className="alert alert-danger">{serverError}</div>}
        
        <div className="row">
        <Input
          {...form.getFieldProps("name.first")}
          type="text"
          label="First Name"
          required
          error={form.touched.name?.first && form.errors.first}
          />
        <Input
        {...form.getFieldProps("name.middle")}
          type="text"
          label="Middle Name"
          error={form.touched.middle && form.errors.middle}
          />
        <Input
          {...form.getFieldProps("name.last")}
          type="text"
          label="Last Name"
          required
          error={form.touched.name?.last && form.errors.last}
          />
        <Input
          {...form.getFieldProps("phone")}
          type="phone"
          label="Phone"
          required
          error={form.touched.phone && form.errors.phone}
          />
        <Input
          {...form.getFieldProps("email")}
          type="email"
          label="Email"
          required
          error={form.touched.email && form.errors.email}
          />
          <Input
            {...form.getFieldProps("password")}
            type="password"
            label="Password"
            required
            error={form.touched.password && form.errors.password}
            />
        <Input
        {...form.getFieldProps("image.url")}
          type="text"
          label="Image url"
          error={form.touched.image?.url && form.errors.url}
          />
        <Input
        {...form.getFieldProps("image.alt")}
          type="text"
          label="Image alt"
          error={form.touched.image?.alt && form.errors.alt}
          />
        <Input
        {...form.getFieldProps("address.state")}
          type="text"
          label="State"
          error={form.touched.address?.state && form.errors.state}
          />
        <Input
          {...form.getFieldProps("address.country")}
          type="text"
          label="Country"
          required
          error={form.touched.address?.country && form.errors.country}
          />
        <Input
          {...form.getFieldProps("address.city")}
          type="text"
          label="City"
          required
          error={form.touched.address?.city && form.errors.city}
          />
        <Input
          {...form.getFieldProps("address.street")}
          type="text"
          label="Street"
          required
          error={form.touched.address?.street && form.errors.street}
          />
        <Input
          {...form.getFieldProps("address.houseNumber")}
          type="number"
          label="House Number"
          required
          error={form.touched.address?.houseNumber && form.errors.houseNumber}
          />
        <Input
        {...form.getFieldProps("address.zip")}
          type="number"
          label="Zip"
          required
          error={form.touched.address?.zip && form.errors.zip}
          />
          <Input
          {...form.getFieldProps("isBusiness")}
          type="checkbox"
          label="Sig Up as Business"
          labelclassname="form-check-label ms-2"
          inputclassname="form-check-input"
          className="text-start mb-4"
          error={form.touched.zip && form.errors.zip}
          />
          
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
            Sign Up
          </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignUp;
