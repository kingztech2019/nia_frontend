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
        <div className="flex flex-col items-center justify-center pt-4">
          <img src="/capture.png" className="h-80" />
          <div className="w-32 h-32">
         <img src="/loader.gif"/>
        </div>
        </div>
        
        
      </div>
    </NavBar>
  );
}
