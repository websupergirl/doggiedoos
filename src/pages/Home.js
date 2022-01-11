import React from "react";
import homebanner from "../media/Banner.45934fca.png";
import dogpoopin from "../media/poop-happens.d311877c.jpg";

export default function Home() {
  return (
    <>
      <div className="text-center">
        <img
          src={homebanner}
          alt="Doggie Doos and Donts"
          className="img-fluid"
        />
      </div>
      <p>
        Poop happens. And let's face it, NO ONE wants to hang out in a yard full
        of landmines. No one wants to smell it, step in it, or worse, scoop your
        pet's poos. You probably can't even get the kids to do it without a
        fight. Wouldn't it be awesome if there were real life turd burglars to
        help you with this problem?
      </p>
      <p>
        Allow us to introduce ourselves: we are the poop angels of Doggie Doos
        and Don'ts and we can't wait to help you take your yard back! With our
        services, it will be effortless to keep your outdoor areas safe, clean,
        and best of all, USABLE.
      </p>
      <h3>Did you know?</h3>
      <p>
        The average dog poops two to three times per day. Consequently, in just
        one week, a dog can produce up to 21 piles of dookie. As you can see, it
        accumulates fast!
      </p>
      <p>
        We service residential and commercial properties, veterinary clinics,
        kennels, all dog businesses and dog-friendly stores, hotels, dog parks
        (and people parks), and more. We can schedule your cleaning weekly,
        bi-weekly, monthly or even as a one-time only clean up. Our affordable
        rates are based on the frequency of visits and the number of dogs you
        own. We provide hassle-free service and you never have to sign a
        contract.
      </p>
      <div className="text-center">
        <img
          src={dogpoopin}
          alt="Doggie Doos and Donts"
          className="img-fluid"
        />
      </div>
      <p>
        After perfecting our poop scooping abilities in the local area since
        2006, we are now extending our services beyond the Eugene/Springfield
        area to encompass the entirety of the Willamette Valley (including
        Portland and its surrounding communities).
      </p>
      <p>
        In addition to our pet waste removal services, we also offer several
        in-home pet services, including nail trims, bathing, grooming,
        pet-sitting, kitty litter clean-up and box exchange, and more. We are
        licensed, bonded, and insured to provide you and your pet(s) with the
        best experience possible. Our team is comprised of compassionate animal
        lovers, who put many of your dollars right back into the community and
        local shelters.
      </p>
    </>
  );
}
