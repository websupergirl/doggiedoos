import React from "react";
import { Link } from "react-router-dom";
import racheldogs from "../media/FB_IMG_1468872423458.e99df335.jpg";

export default function TheTeam() {
  return (
    <>
      <h1>The Team</h1>
      <p>
        Our team has been poop scooping throughout the Willamette Valley since
        2006. We know how fast the daily poos can get away from you. That's why
        we are here to help! Allow us to make your life a little more simple,
        your family and pets a little safer, and your yard clean.
      </p>
      <p>
        As all of us here at Doggie Doos And Don'ts are passionate animal lovers
        with many years of experience in the pet service industry. That's why we
        offer much more than poop scooping. Following our theme of making your
        life easier, we are more than happy to make a trip to your home (where
        your fur baby can remain more comfortable) for anything from nail trims
        to walks, pet-sitting, and more! Be sure to check out what else we can
        do for you!
      </p>
      <p>
        Our founder, Rachel Azzato, has been working with animals since
        childhood and feels it is her life's purpose to bridge the worlds of
        animals and humans. She established Doggie Doos and Don’ts with the
        belief that customers’ needs are of the utmost importance. Our entire
        family team is heavily committed to meeting those needs. As a result, a
        high percentage of our business is from repeat customers and referrals
        (don’t miss our{" "}
        <Link to="/specials">special referral program here</Link>).
      </p>
      <div className="text-center">
        <h3>
          We welcome the opportunity to earn your trust and deliver you the best
          service in the industry!
        </h3>
        <img src={racheldogs} alt="Our Team" className="img-fluid" />
      </div>
    </>
  );
}
