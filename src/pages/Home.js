import logo from "../images/logo.png";
import { useState } from "react";
import MyDialog from "../components/MyDialog.js";

export default function Home() {
  document.body.style.marginLeft = "0%";
  document.body.style.marginRight = "0%";
  document.body.style.marginTop = "0%";

  return (
    <>
      <MyDialog />
      <div>&nbsp;</div>
      <div className="absolute mt-[7em]">
        <header className="flex justify-center">
          <img width="50%" src={logo} alt="Logo"></img>
        </header>
        <div className="flex justify-center gap-20">
          <a href="/venues" className="text-pink-500">
            Venues
          </a>
          <a className="text-pink-500">Your Events</a>
        </div>
      </div>
    </>
  );
}
