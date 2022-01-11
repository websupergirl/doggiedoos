import React from "react";
import { FaDog } from "react-icons/fa";
import nailclip from "../media/rachel-clipping-nails.jpg";

export default function PetCare() {
  return (
    <>
      <img src={nailclip} alt="Nail Trim" className="float-end" />
      <h1>Nail Trims &amp; Other Pet Care Services</h1>
      <p>
        Does your pooch or kitty need a little paw-dicure? We are happy to make
        a trip to your home to cut your pet's nails. Allowing them to remain in
        their comfortable environment makes for a less traumatic nail-cutting
        experience for your companion. Nail trims are an important part in the
        care and maintenance of dogs and cats. We recommend that it be done
        monthly (once every four weeks).
      </p>
      <h2>
        <FaDog /> Rates for Nail Trims and Express Pet Care Services <FaDog />
      </h2>
      <ul>
        <li>15 minute walk $20</li>
        <li>30 minute walk $25</li>
        <li>60 minute walk $35</li>
      </ul>
    </>
  );
}
