import React from "react";
import { FaCat } from "react-icons/fa";
import litterbox from "../media/kitty-litter-box.97b6d00f.jpg";

export default function LitterCleanup() {
  return (
    <>
      <div>
        <img src={litterbox} alt="Litterbox" class="rounded float-end" />
      </div>
      <h1>Kitty Litter Clean-Up</h1>
      <h4>
        Don’t have time to clean up after your kitty? Or just sick of dealing
        with the mess? Let us relieve some of your daily stresses with our Kitty
        Litter Clean-up Service!
      </h4>
      <h3>How it works:</h3>
      <ul>
        <li>
          Leave your used litter box(es) in a designated area on your service
          day.
        </li>
        <li>
          We drop by replace the litter (or sift through it), clean the box, and
          leave it ready for your cat!
        </li>
        <li>Litter is supplied for an added charge on your monthly invoice.</li>
      </ul>
      <h2>
        <FaCat /> Kitty Litter Clean-Up <FaCat />
      </h2>
      <ul>
        <li>$15 per visit (if replacing litter)</li>
        <li>$18 per visit (if sifting litter)</li>
        <li>+$8 per additional litter box, per visit</li>
      </ul>
    </>
  );
}
