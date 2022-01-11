import React from "react";
import goingwithout from "../media/youre-going-without-me.10442edb.jpg";

export default function DogSitting() {
  return (
    <>
      <img src={goingwithout} alt="Dog Sitting" className="float-end" />
      <h1>Dog-Sitting Services</h1>
      <p>
        Going out of town and need someone to check in on your furchildren while
        you're away? We can help you with all of your dog-sitting needs, whether
        you need simple check-ins, administration of medicines, or even
        overnight care. If you have a special needs situation, just let us know
        and we will work closely with you to create the best experience for your
        pet.
      </p>
      <h3>Check-In Visits</h3>
      <p>
        Doggie Doos and Don'ts will visit your house up to three times per day.
        Each visit spans thirty minutes to one hour of time spent with your
        pooch.
      </p>
      <ul>
        <li>$20 per visit for up to two dogs</li>
        <li>+$2 for each additional pet (dog or cat)</li>
        <li>+$1 small animal enclosure (e.g. cage, hutch, aquarium, etc.)</li>
      </ul>
      <h3>Medication Administration</h3>
      <p>
        For a small, additional fee, we are also more than happy to administer
        any medications your pet may require in your absence during our visits.
      </p>
      <ul>
        <li>$1.50 to administer pills, liquids, or eye drops</li>
        <li>$3.50 to administer injections (e.g. insulin, etc.)</li>
      </ul>
      <h3>Overnight Care</h3>
      <p>
        Some furbabies are afraid of the dark too, and we understand that. Our
        overnight care service allows your pets to maintain their routine in the
        safety and comfort of their own home. We tailor our visit to your needs,
        whether they may include morning and/or evening walks, feeding,
        watering, kennel cleaning, mail or newspaper retrieval, plant watering,
        light rotation, home security checks, or anything else you may require.
        And we will be at your pup's beck-and-call for a full twelve hours. When
        booking this service, you will determine the petsitter's arrival and
        departure time.
      </p>
      <ul>
        <li>$50 for up to two dogs (12-hour period)</li>
        <li>+$5 for each additional dog</li>
      </ul>
    </>
  );
}
