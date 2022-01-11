import React from "react";
import ImageTestimonials from "../components/ImageTestimonials.js";

export default function Testimonials() {
  return (
    <>
      <h1>Client Testimonials</h1>
      <p>
        Our team has been poop scooping throughout the Willamette Valley since
        2006. We know how fast the daily poos can get away from you. That's why
        we are here to help! Allow us to make your life a little more simple,
        your family and pets a little safer, and your yard clean.
      </p>
      <p>
        Check out these client testimonials to see what people have to say about
        our pet waste removal and other pet care services!
      </p>
      <div className="text-center">
        <ImageTestimonials />
      </div>
    </>
  );
}
