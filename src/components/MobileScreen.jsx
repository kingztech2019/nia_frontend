import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";

export default function MobileScreen() {
  return (
    <NavBar>
      <div className="text-center">
        <div>
          Kindly check your email to follow the process on the mobile for the
          capturing.
        </div>
        <div className="flex items-center justify-center pt-4">
          <img src="/capture.png" className="h-96" />
        </div>
      </div>
    </NavBar>
  );
}
