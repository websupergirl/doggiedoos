import React from "react";
import WasteRemovalTable from "../components/WasteTable.js";
import BookServiceButton from "../components/BookServiceButton.js";
import { Link } from "react-router-dom";

export default function PetWasteRemoval() {
  return (
    <>
      <BookServiceButton alignment="right" />
      <h1>Pet Waste Removal Services</h1>
      <p>
        You’ve come to the right place, if you’re on the hunt for some licensed,
        bonded, and insured dog poop scooping angels. Our service area
        encompasses Oregon’s entire Willamette Valley, extending from the
        Eugene/Springfield area to Portland and all of its surrounding areas.
        Your satisfaction is guaranteed. Check out our price list below for our
        Eugene/Springfield service area’s pet waste removal rates. Portland area
        rates are being re-evaluated currently. Please contact us at
        info@doggiedoosanddonts.com for more information.
      </p>
      <WasteRemovalTable />
      <p>
        Dog poop scooping is important for a variety of reasons. Check out these
        links below for more information:
      </p>
      <ul>
        <li>
          Pet waste removal is{" "}
          <Link to="/scoop-for-environment">crucial to the environment</Link>
        </li>
        <li>
          Pet waste removal is{" "}
          <Link to="/scoop-for-health">important for the health</Link> of humans
          and pets
        </li>
        <li>
          <Link to="/faq">Frequently Asked Questions</Link> about our poop
          scooping services
        </li>
      </ul>
    </>
  );
}
