import AppBarHome from "./appBarHome";
import "./homeStyle.css";
import React, { useState } from "react";
import { FormControl, Input } from "@mui/material";

const HomeAuto = () => {
  return (
    <div className="container">
      <AppBarHome />
      <div className="box-container">
        <div className="box">
          <div className="switch"></div>
          <div className="input"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeAuto;
