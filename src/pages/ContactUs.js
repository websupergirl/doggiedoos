import React from "react";
import allrachels from "../media/5-Rachels-clear-2000-1-e1470264802425.89ae0522.jpg";

export default function ContactUs() {
  return (
    <>
      <h1>Contact Us</h1>
      <div className="text-center">
        <p>
          Feel free to contact us by phone at (541) 505-4298 or by email at
          info@doggiedoosanddonts.com
        </p>
        <img src={allrachels} alt="Contact Us" className="img-fluid" />
      </div>
    </>
  );
}
