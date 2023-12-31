"use client";

import React, { useState } from "react";
// import Image from "next/image";

import "./navbar-styles.css";

import { BookIcon, MoonIcon } from "../../assets";

import Toggle from "../toggle/toggle";

function Navbar() {
  const [select, setSelect] = useState("1");

  return (
    <nav className="navbar_container">
      {/* <Image src={BookIcon} alt="Icon book" width={50} height={50} /> */}
      <BookIcon />
      <div className="navbar_right_container">
        <select
          value={select}
          className="selection"
          onChange={(e) => {
            setSelect(e.target.value);
          }}>
          <option value="1">list1</option>
          <option value="2">list2</option>
        </select>
        <span className="line"></span>
        <Toggle />
        <MoonIcon />
      </div>
    </nav>
  );
}

export default Navbar;
