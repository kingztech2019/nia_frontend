import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const body = {
        email: data.email,
        password: data.password,
      };
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/public/login`,
        { ...body }
      );
      localStorage.setItem("jwt", response?.data?.token);
      localStorage.setItem("user", response?.data?.user.Email);
      navigate("/home");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setMessage(error?.response?.data?.message);
      console.log(error?.response?.data?.message);
    }
  };

  const handleShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      navigate("/home");
    }
  }, []);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 max-w-md mx-auto bg-white  mt-10 rounded"
    >
      <div className="text-center">
        <img src="/image.svg" />
      </div>

      <label
        className="font-medium block mb-1 mt-6 text-gray-700"
        for="username"
      >
        Email
      </label>
      <input
        className="appearance-none border-2 rounded w-full py-3 px-3 leading-tight border-gray-300 bg-gray-100 focus:outline-none focus:border-indigo-700 focus:bg-white text-gray-700 pr-16 font-mono"
        id="username"
        type="text"
        autocomplete="off"
        autofocus
        required
        {...register("email", {
          required: true,
        })}
      />
      <div className="italic text-xs text-red-600 pt-1">
        {errors.email?.type === "required" && "Password is required"}
      </div>

      <label
        className="font-medium block mb-1 mt-6 text-gray-700"
        for="password"
      >
        Password
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 right-0 flex items-center px-2">
          <input
            className="hidden js-password-toggle"
            id="toggle"
            type="checkbox"
          />
          <label
            className="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label"
            for="toggle"
            onClick={handleShow}
          >
            {show ? (
              <img src="/eye.png" className="w-4 h-4" />
            ) : (
              <img src="/eyeicon.png" />
            )}
          </label>
        </div>
        <input
          className="appearance-none border-2 rounded w-full py-3 px-3 leading-tight border-gray-300 bg-gray-100 focus:outline-none focus:border-indigo-700 focus:bg-white text-gray-700 pr-16 font-mono js-password"
          id="password"
          type={show ? "text" : "password"}
          autocomplete="off"
          required
          {...register("password", {
            required: true,
          })}
        />
        <div className="italic text-xs text-red-600 pt-1">
          {errors.password?.type === "required" && "Password is required"}
          {message}
        </div>
      </div>

      <button
        disabled={loading ? true : false}
        className="w-full bg-indigo-700 hover:bg-indigo-900 text-white font-medium py-3 px-4 mt-10 rounded focus:outline-none focus:shadow-outline"
      >
        {loading ? "Loading" : "Sign in"}
      </button>
      <div className="text-right cursor-pointer pt-2">Forgot Password?</div>
    </form>
  );
}
