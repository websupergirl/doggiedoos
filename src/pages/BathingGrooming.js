import React from "react";
import dogshake from "../media/bathing-and-grooming-e1469910926484.e97cd113.jpg";

export default function BathingGrooming() {
  return (
    <>
      <img src={dogshake} alt="Bathing Grooming" className="float-end" />
      <h1>Bathing &amp; Grooming Services</h1>
      <p>
        If your dog is feeling a little dirty and stinky and you don't have the
        time, patience, or energy to deal with that, allow us to make your life
        easier and less messy. With out bathing and grooming services, it's more
        like a glorious and glamorous spa day that leaves your companion feeling
        top dawg!
      </p>
      <p>
        We start by picking up your pooch and taking them on a classy ride to
        the nearest DIY dog washing facility (keeping your dollars in the local
        economy), so that there is no mess in your home to stress about. There,
        we give them a good scrubbing and brush out those luscious locks, before
        returning them safely back to your home. Ear cleaning, nail trimming,
        and anal gland expression are all included in the cost. While shampoo is
        included in our fee, we are happy to use any special shampoos or
        conditioners your pup may require, if you provide it to us.
      </p>
      <h2>Rates for Bathing &amp; Grooming *</h2>
      <ul>
        <li>Small dogs (0-25 lbs.) $58 &amp; up</li>
        <li>Medium dogs (26-45 lbs.) $68 &amp; up</li>
        <li>Large dogs (over 45 lbs.): $78 &amp; up</li>
      </ul>
      <p>
        <em>
          * Prices vary, depending on factors like the condition of the dog's
          coat, etc.
        </em>
      </p>
    </>
  );
}
