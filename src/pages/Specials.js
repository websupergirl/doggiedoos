import React from "react";
import discountdog from "../media/did-somebody-say-discount.3c32279e.jpg";
import { Link } from "react-router-dom";

export default function Specials() {
  return (
    <>
      <h1>Specials</h1>
      <img src={discountdog} alt="Service Discounts" className="float-end" />
      <p>
        We love specials and discounts as much as anyone! So, we've set up some
        opportunities to help you save a few dollars. As a token of our
        appreciation, we are honored to offer a 10% discount to the following
        pets and/or pet owners:
      </p>

      <ul>
        <li>Seniors (age 60 and over)</li>
        <li>Police Dogs</li>
        <li>Assistance Dogs</li>
        <li>Service Dogs</li>
        <li>Members of the military</li>
      </ul>
      <p>Additionally, we offer a few other deals and specials, as follows:</p>

      <h3>Discounts for Adopters</h3>
      <p>
        50% off of your first month's service with proof of adoption from any
        local shelter/adoption agencies (e.g. LCAR, Greenhill Humane Society,
        Save the Pets, Luvable Dog Rescue, etc.)
      </p>

      <h3>Customer Loyalty Program</h3>
      <p>
        We love to reward our returning customers, especially those who pay in
        advance! As a token of our appreciation for your business, we offer poop
        scoop clients the following discounts:
      </p>
      <ul>
        <li>Pay for 3 months of service up front, get 10% off the total</li>
        <li>Pay for 6 months of service up front, get 15% off the total</li>
        <li>Pay for one year of service up front, get 20% off the total</li>
      </ul>
      <h3>Customer Referral Program</h3>
      <p>One FREE* service visit for each new customer referral!</p>

      <p>
        <i>
          * You will only qualify for one free service visit after your referred
          friend or acquaintance completes one service appointment.
        </i>
      </p>

      <h3>Online Sign-up Specials</h3>
      <p>
        <Link to="/book-service">Sign up for service online today</Link> and
        receive $5 off your first service.
      </p>

      <h3>Gift Certificates</h3>
      <p>
        Gift certificates are available for all of our services, in any amount,
        for anyone. Surprise a friend with our unique service &mdash; the gift
        of a clean yard!
      </p>
    </>
  );
}
