import { validateFormikUsingJoi } from "../utils/validateFormikUsingJoi";
import Input from "./common/input";
import PageHeader from "./common/pageHeader";

// import { Navigate, useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import Joi from "joi";
import { useState } from "react";
// import { useAuth } from "../contexts/auth.context";

const SignUp = ({ redirect }) => {
  const [serverError, setServerError] = useState("");
  // const navigate = useNavigate();

  // const { signUp, user } = useAuth();

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      firstName:"",
      lastName:"",
      phone:"",
      email: "",
      password: "",
      // confPassword:"",
      country: "",
      city: "",
      street: "",
      houseNumber: "",
    },
    validate: validateFormikUsingJoi({
      firstName: Joi.string().min(2).max(256).required(),
      middleName: Joi.string().min(2).max(256),
      lastName: Joi.string().min(2).max(256).required(),
      // confPassword: Joi.string().min(6).max(1024).required(),
      phone: Joi.string().min(9).max(11).required(),
      email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email({ tlds: { allow: false } }),
      password: Joi.string().min(7).max(20).required(),
      imageUrl: Joi.string().min(14),
      imageAlt: Joi.string().min(2).max(256),
      state: Joi.string().min(2).max(256),
      country: Joi.string().min(2).max(256).required(),
      city: Joi.string().min(2).max(256).required(),
      street: Joi.string().min(2).max(256).required(),
      houseNumber: Joi.number().min(1).max(256).required(),
      zip: Joi.number().min(2).max(256),
    }),
    // async onSubmit(values) {
    //   try {
    //     await signUp({ ...values, biz: false });
    //     if (redirect) {
    //       navigate(redirect);
    //     }
    //   } catch (err) {
    //     if (err.response?.status === 400) {
    //       setServerError(err.response.data);
    //     }
    //   }
    // },
  });

  // if (user) {
  //   return <Navigate to="/" />;
  // }

  return (
    <>
      <PageHeader
        title="REGISTRATION"
      />

      <form onSubmit={form.handleSubmit}>
        {serverError && <div className="alert alert-danger">{serverError}</div>}
        
        <div className="row">
        <Input
          {...form.getFieldProps("firstName")}
          type="text"
          label="First Name"
          required
          error={form.touched.firstName && form.errors.firstName}
          />
        <Input
        {...form.getFieldProps("middleName")}
          type="text"
          label="Middle Name"
          error={form.touched.middleName && form.errors.middleName}
          />
        <Input
          {...form.getFieldProps("lastName")}
          type="text"
          label="Last Name"
          required
          error={form.touched.lastName && form.errors.lastName}
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
        {...form.getFieldProps("imageUrl")}
          type="text"
          label="Image url"
          error={form.touched.imageUrl && form.errors.imageUrl}
          />
        <Input
        {...form.getFieldProps("imageAlt")}
          type="text"
          label="Image alt"
          error={form.touched.imageAlt && form.errors.imageAlt}
          />
        <Input
        {...form.getFieldProps("state")}
          type="text"
          label="State"
          error={form.touched.state && form.errors.state}
          />
        <Input
          {...form.getFieldProps("country")}
          type="text"
          label="Country"
          required
          error={form.touched.country && form.errors.country}
          />
        <Input
          {...form.getFieldProps("city")}
          type="text"
          label="City"
          required
          error={form.touched.city && form.errors.city}
          />
        <Input
          {...form.getFieldProps("street")}
          type="text"
          label="Street"
          required
          error={form.touched.street && form.errors.street}
          />
        <Input
          {...form.getFieldProps("houseNumber")}
          type="number"
          label="House Number"
          required
          error={form.touched.houseNumber && form.errors.houseNumber}
          />
        <Input
        {...form.getFieldProps("zip")}
          type="number"
          label="Zip"
          error={form.touched.zip && form.errors.zip}
          />
          <div class= "text-start mb-4">
            <input class="form-check-input" type="checkbox" name="isBusiness" id="isBusiness"/>
            <label class="form-check-label ms-2" for="isBusiness">
            Sig Up as Business
            </label>
          </div>
          
          <div className="col-sm-6 my-2">
          <button className="btn btn-outline-danger form-control">
            Cancel
          </button>
          </div>
          <div className="ms-auto col-sm-6 my-2">
          <button className="btn btn-outline-info form-control">
          <i className="bi bi-arrow-repeat"></i>
          </button>
          </div>
          <div className="mx-auto col-sm-12 col-md-8 col-lg-6 my-2 mb-4">
          <button disabled={!form.isValid}
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
