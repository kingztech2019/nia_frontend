import React, { useEffect } from "react";
import NavBar from "./NavBar";
import "./success.css";

export default function ({ statusTimeout }) {
  useEffect(() => {
    clearInterval(statusTimeout);
    console.log(statusTimeout);

    localStorage.removeItem("identity");
  }, []);

  return (
    <div className="container">
      <div class="card">
        <div className="icon">
          <i class="checkmark">✓</i>
        </div>
        <h1>Success</h1>
        <p>
          We received your request;
          <br /> we'll be in touch shortly!
        </p>
      </div>
    </div>
  );
}
