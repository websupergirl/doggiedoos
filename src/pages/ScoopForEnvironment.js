import React from "react";
import environment from "../media/dog-poop-water-pollution-infographic.98ee814d.png";

export default function ScoopForEnvironment() {
  return (
    <>
      <div className="text-center">
        <img
          src={environment}
          alt="Scoop for the Environment"
          className="img-fluid"
        />
      </div>
    </>
  );
}
