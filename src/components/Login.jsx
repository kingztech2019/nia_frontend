import React, { useState } from "react";

export default function Login() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <form className="p-4 max-w-md mx-auto bg-white  mt-10 rounded">
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
      />

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
        />
      </div>

      <button
        className="w-full bg-indigo-700 hover:bg-indigo-900 text-white font-medium py-3 px-4 mt-10 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        Sign in
      </button>
      <div className="text-right cursor-pointer pt-2">Forgot Password?</div>
    </form>
  );
}
