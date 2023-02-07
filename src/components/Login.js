import React, { useState } from "react";
import LoginSideImage from "../images/bg_1.jpg";
import { BiShow, BiHide } from 'react-icons/bi';
import { useFormik } from "formik";
import { signUpSchema } from "../schema/index";
import { useNavigate } from "react-router-dom";

const initialValues = {
    name: "",
    password: "",
  };

const Login = () => {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
  useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      // console.log(values)      
      localStorage.setItem("FormData", JSON.stringify(values));
      action.resetForm();
    },
  });
  const navigate = useNavigate();
  const loginRedirect = () => {
    const user = localStorage.getItem("FormData")
    console.log(user)
   
  };


 

     // Toggle Password Here
  const [toggleMyPassword, setToggleMyPassword] = useState(false);
  const togglePassword = () => {
    setToggleMyPassword(!toggleMyPassword);
  };
  return (
    <div>
      <div className="">
        <div className="container-fluid g-0">
          <div className="row g-0">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="d-flex justify-content-center align-items-center h-100">
                <div className="ps-lg-5 pe-lg-5 ms-lg-5 me-lg-5 ps-md-3 pe-md-3 ps-2 pe-2 pt-lg-0 pb-lg-0 pt-5 pb-5">
                  <div className="">
                    <h1>
                      Login to <strong>Alovera</strong>
                    </h1>
                  </div>
                  <div className="pb-3">
                    <p>
                      Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                      consectetur adipisicing.
                    </p>
                  </div>
                  <form onSubmit={ handleSubmit }>
                  <div className="form-group">
                    <label htmlFor="name" className="text-black-50 pb-2">
                      <b>Username</b>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form-control p-2"
                      placeholder="your-email@gmail.com"
                    />
                  </div>
                  <div className="">
                      {errors.name && touched.name ? (
                    <span className="form_error">{errors.name}</span>
                  ) : null}
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="password"
                      className="text-black-50 pb-2 pt-2"
                    >
                      <b>Password</b>
                    </label>
                    <input
                      type={toggleMyPassword ? "text" : "password"} 
                      className="form-control p-2"
                      name="password"
                      id="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your Password"
                    />
                  </div>
                  <div className="">
                  {errors.password && touched.password ? (
                    <span className="form_error">{errors.password}</span>
                  ) : null}
                  </div>
                  <div className="d-flex justify-content-end pt-3">
                    { toggleMyPassword ? (
                        <button type="button" className="btn btn-primary" onClick={ togglePassword }>
                        Hide Password  <BiHide />
                          </button>
                    ) :
                    (<button type="button" className="btn btn-primary" onClick={ togglePassword }>
                    Show Password  <BiShow />
                      </button>)
                    }
                    </div>
                  <div className="d-flex justify-content-between pt-3 pb-3">
                    <div>
                      <input type="checkbox"/>
                      <label htmlFor="remember_checkbox">&nbsp; Remember Me</label>
                    </div>
                    <div>
                      <a href="https://google.com" className="forgot_link">
                        Forgot Password
                      </a>
                    </div>
                  </div>
                  <div className="pt-lg-5 pt-3">
                    <button type="submit" className="btn btn-primary w-100 p-2" onClick={ loginRedirect }>Login</button>
                  </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="height_container">
                <img
                  src={LoginSideImage}
                  className="img-fluid h-100 w-100"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
