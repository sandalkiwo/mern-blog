<<<<<<< HEAD
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import {  useDispatch, useSelector } from "react-redux";
import { signinStart, signinSuccess, signinFailure } from "../redux/user/userSLice";

const SignIn = () => {
  const [formData, setFormData] = useState({});
 const {loading, error: errorMessage} = useSelector((state) => state.user);

  const dispatch = useDispatch();
=======
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

>>>>>>> 375c2f635e4e54352732bd16836370aca1bdad57
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
<<<<<<< HEAD
      return dispatch(signinFailure("All fields are required"));
    }

    try {
      dispatch(signinStart());
=======
      return setErrorMessage("All fields are required");
    }

    try {
      setLoading(true);
      setErrorMessage(null);
>>>>>>> 375c2f635e4e54352732bd16836370aca1bdad57
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
<<<<<<< HEAD
        dispatch(signinFailure(data.message));
      }
      if (res.ok) {
        dispatch(signinSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signinFailure(error.message));
=======
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate("/");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
>>>>>>> 375c2f635e4e54352732bd16836370aca1bdad57
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* Left */}
        <div className="flex-1">
          <Link to={"/"} className=" text-4xl font-bold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Dian's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            Bergerak melampaui batas menuju peradaban yang berpendidikan yang
            bertujuan untuk mencerdaskan kehidupan bangsa, bersama kami
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              PMII
            </span>{" "}
            alkamal wujudkan impian anda!!!
          </p>
        </div>
        {/* Rigth */}
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="">
              <Label value="Your Email" />
              <TextInput
                type="email"
                placeholder="Email"
                id="email"
                onChange={handleChange}
                required
              />
            </div>
            <div className="">
              <Label value="Your Password" />
              <TextInput
                type="password"
                placeholder="***********"
                id="password"
                onChange={handleChange}
                required
              />
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
          <div className="flex text-sm mt-5 justify-between">
<<<<<<< HEAD
            <span>Dont have an account?</span>
=======
            <span>Don't have an account?</span>
>>>>>>> 375c2f635e4e54352732bd16836370aca1bdad57
            <Link to="/sign-up" className="text-blue-500">
              Sign Up
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
