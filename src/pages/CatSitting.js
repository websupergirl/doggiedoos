import React from "react";
import { Link } from "react-router-dom";
import catdress from "../media/cat-in-a-dress.9a5754bb.jpg";

export default function CatSitting() {
  return (
    <>
      <img src={catdress} alt="Cat Sitting" className="float-end" />
      <h1>Cat-Sitting Services</h1>
      <p>
        Going out of town and need someone to check in on your furchildren while
        you're away? We can help you with our spectacular cat-sitting, whether
        you need simple check-ins, administration of medicines, or even
        overnight care. If you have a special needs situation, just let us know
        and we will work closely with you to create the best experience for your
        pet.
      </p>
      <h3>Check-In Visits</h3>
      <p>
        Doggie Doos and Don'ts will visit your house up to three times per day.
        Each visit spans thirty minutes to one hour of time spent with your
        kitty. Litter clean-up is not included in this service, but is available
        for an small additional fee (see below).
      </p>
      <ul>
        <li>$15 per visit</li>
        <li>+$1 for each additional cat</li>
        <li>+$1 small animal enclosure (e.g. cage, hutch, aquarium, etc.)</li>
      </ul>
      <h3>Medication Administration</h3>
      <p>
        For a small, additional fee, we are also more than happy to administer
        any medications your cat may require in your absence during our visits.
        Rates reflect price per visit.
      </p>
      <ul>
        <li>$1.50 to administer pills, liquids, or eye drops</li>
        <li>$3.50 to administer injections (e.g. insulin, etc.)</li>
      </ul>

      <h3>Kitty Litter Clean-up</h3>
      <p>
        During our visit, we will either sift out the cat waste and top off your
        litter, or we will empty out and refill your litter box.{" "}
        <em>
          Customer provides litter box, sifter/scooper, liners and kitty litter.
        </em>
      </p>
      <ul>
        <li>$7 per visit</li>
        <li>+$2 per additional litter box, per visit</li>
      </ul>
      <p>
        You may also be interested in our{" "}
        <Link to="/litter-cleanup">Kitty Litter Box Exchange service</Link>.
      </p>

      <h3>Overnight Care</h3>
      <p>
        We certainly do know that &quot;Fraidy Cats&quot; are a real thing and
        some kitties are too scared of the dark to stay home all alone. Our
        overnight care service allows your feline to maintain his/her routine in
        the safety and comfort of his/her own home. We tailor our visit to your
        needs, whether they may include feeding, watering, litter box cleaning
        (included in overnight care service for no additional charge), mail or
        newspaper retrieval, plant watering, light rotation, home security
        checks, or anything else you may require. And we will be at your fuzzy
        friend's beck-and-call for a full twelve hours. When booking this
        service, you will determine the petsitter's arrival and departure time.
      </p>
      <ul>
        <li>$50 for up to two cats (12-hour period)</li>
        <li>+$5 for each additional cat</li>
      </ul>
    </>
  );
}
