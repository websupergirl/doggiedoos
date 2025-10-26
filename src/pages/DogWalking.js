import React from "react";
import { FaDog } from "react-icons/fa";
import rollingdog from "../media/dog-rolling.ebff269e.jpg";

export default function DogWalking() {
  return (
    <>
      <h1>Dog Walking Services</h1>
      <p>
        Is Grover starting to look more like a couch potato than dog? Are you
        busier than usual and need a little help getting your pup's exercise in?
        Perhaps, you're going out of town for a night? If you answered yes to
        any of these questions, allow us to provide you with a solution: our dog
        walking services!
      </p>
      <p>
        Daily walks allow your dog an opportunity to get exercise, burn off
        hyper or nervous energy, get some love, &quot;sniff the daily
        news&quot;, and play. Research shows that dogs who have enough exercise
        feel less stress, exhibit fewer signs of separation anxiety, and have a
        healthier social temperament. Indeed, a tired dog is a happy dog.
      </p>
      <h2>
        <FaDog /> Rates for Dog Walking <FaDog />
      </h2>
      <ul>
        <li>30 minute walk $30 for one dog</li>
        <li>60 minute walk $50 for one dog</li>
		<li>Each additional dog +$10</li>
      </ul>
      <div className="text-center">
        <img src={rollingdog} alt="Dog Walking" className="img-fluid" />
      </div>
    </>
  );
}
