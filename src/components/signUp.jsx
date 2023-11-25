import { validateFormikUsingJoi } from "../utils/validateFormikUsingJoi";
import Input from "./common/input";
import PageHeader from "./common/pageHeader";

<<<<<<< HEAD
import { Navigate, useNavigate } from "react-router-dom";
=======
// import { Navigate, useNavigate } from "react-router-dom";
>>>>>>> 481e32ff7ceb6f59cd88fa3e29ea3b00c1b9ba47

import { useFormik } from "formik";
import Joi from "joi";
import { useState } from "react";
<<<<<<< HEAD
import { useAuth } from "../contexts/auth.context";

const SignUp = ({ redirect }) => {
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  const { signUp, user } = useAuth();
=======
// import { useAuth } from "../contexts/auth.context";

const SignUp = ({ redirect }) => {
  const [serverError, setServerError] = useState("");
  // const navigate = useNavigate();

  // const { signUp, user } = useAuth();
>>>>>>> 481e32ff7ceb6f59cd88fa3e29ea3b00c1b9ba47

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
<<<<<<< HEAD
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
      console.log(values)
      try {
        await signUp({ ...values});
        if (redirect) {
          navigate(redirect);
        }
      } catch (err) {
        if (err.response?.status === 400) {
          console.log("1.",values)
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
=======
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

>>>>>>> 481e32ff7ceb6f59cd88fa3e29ea3b00c1b9ba47
  return (
    <>
      <PageHeader
        title="REGISTRATION"
      />

      <form onSubmit={form.handleSubmit}>
        {serverError && <div className="alert alert-danger">{serverError}</div>}
        
        <div className="row">
        <Input
<<<<<<< HEAD
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
=======
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
>>>>>>> 481e32ff7ceb6f59cd88fa3e29ea3b00c1b9ba47
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
<<<<<<< HEAD
        {...form.getFieldProps("image.url")}
          type="text"
          label="Image url"
          error={form.touched.url && form.errors.url}
          />
        <Input
        {...form.getFieldProps("image.alt")}
          type="text"
          label="Image alt"
          error={form.touched.alt && form.errors.alt}
          />
        <Input
        {...form.getFieldProps("address.state")}
=======
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
>>>>>>> 481e32ff7ceb6f59cd88fa3e29ea3b00c1b9ba47
          type="text"
          label="State"
          error={form.touched.state && form.errors.state}
          />
        <Input
<<<<<<< HEAD
          {...form.getFieldProps("address.country")}
=======
          {...form.getFieldProps("country")}
>>>>>>> 481e32ff7ceb6f59cd88fa3e29ea3b00c1b9ba47
          type="text"
          label="Country"
          required
          error={form.touched.country && form.errors.country}
          />
        <Input
<<<<<<< HEAD
          {...form.getFieldProps("address.city")}
=======
          {...form.getFieldProps("city")}
>>>>>>> 481e32ff7ceb6f59cd88fa3e29ea3b00c1b9ba47
          type="text"
          label="City"
          required
          error={form.touched.city && form.errors.city}
          />
        <Input
<<<<<<< HEAD
          {...form.getFieldProps("address.street")}
=======
          {...form.getFieldProps("street")}
>>>>>>> 481e32ff7ceb6f59cd88fa3e29ea3b00c1b9ba47
          type="text"
          label="Street"
          required
          error={form.touched.street && form.errors.street}
          />
        <Input
<<<<<<< HEAD
          {...form.getFieldProps("address.houseNumber")}
=======
          {...form.getFieldProps("houseNumber")}
>>>>>>> 481e32ff7ceb6f59cd88fa3e29ea3b00c1b9ba47
          type="number"
          label="House Number"
          required
          error={form.touched.houseNumber && form.errors.houseNumber}
          />
        <Input
<<<<<<< HEAD
        {...form.getFieldProps("address.zip")}
          type="number"
          label="Zip"
          required
          error={form.touched.zip && form.errors.zip}
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
=======
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
>>>>>>> 481e32ff7ceb6f59cd88fa3e29ea3b00c1b9ba47
            Cancel
          </button>
          </div>
          <div className="ms-auto col-sm-6 my-2">
<<<<<<< HEAD
          <button className="btn btn-outline-info form-control" onClick={resetForm}>
=======
          <button className="btn btn-outline-info form-control">
>>>>>>> 481e32ff7ceb6f59cd88fa3e29ea3b00c1b9ba47
          <i className="bi bi-arrow-repeat"></i>
          </button>
          </div>
          <div className="mx-auto col-sm-12 col-md-8 col-lg-6 my-2 mb-4">
<<<<<<< HEAD
          <button type="submit" disabled={!form.isValid}
=======
          <button disabled={!form.isValid}
>>>>>>> 481e32ff7ceb6f59cd88fa3e29ea3b00c1b9ba47
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
