import React from "react";
import tugdog from "../media/funny-dog.fc24e95e.jpg";
import { Link } from "react-router-dom";

export default function Faq() {
  return (
    <>
      <h1>FAQs</h1>
      <p>
        Here are some frequently received questions about dog poop, our poop
        scooping service, and other turd burglar-related inquiries:
      </p>
      <h3>Do I have to sign a contract?</h3>
      <p>
        Not at all. Your dog poop scooping service can be started or stopped at
        any time with a phone call (541) 505-4298 or e-mail
        info@doggiedoosanddonts.com
      </p>
      <h3>Can my dog be left in the yard during service?</h3>
      <p>
        Yes. We don't mind, if they don't mind and are friendly with turd
        burglars like us.
      </p>
      <img src={tugdog} alt="Playful Dog" className="float-end" />
      <h3>Do I have to be home for the service?</h3>
      <p>
        No. However, for the first service, it is best to meet with you and your
        pet(s), so we can all get acquainted and discuss the service. This is
        also a good time to see if your pet will mind us coming into their yard.
        We also like to have you sign a service agreement giving us permission
        to come into your yard.
      </p>
      <h3>Can I schedule my service for a particular day?</h3>
      <p>
        Yes. For example, if you have a lawn service, it is best to schedule our
        visit for the day before.
      </p>
      <h3>How am I billed?</h3>
      <p>
        You will be billed for service at the end of the month. We can do this
        through regular mail or email. Payment is due upon receipt of the bill.
        We accept cash, checks and all credit/debit cards. You can also pay your
        bill through our online website.
      </p>
      <h3>Is there an extra charge for the first time?</h3>
      <p>
        The first time clean up is a little more because of the accumulation of
        doo. (<Link to="/pet-waste-removal">See our rates here</Link>.)
      </p>
      <h3>Is the initial pickup fee included in my first months bill?</h3>
      <p>No, the initial pet waste removal fee is due at time of service.</p>
      <h3>How do you prevent spreading any diseases?</h3>
      <p>
        We disinfect our dog poop scooping equipment and shoes after cleaning
        every yard.
      </p>
      <h3>What is done with the poop?</h3>
      <p>It is double-bagged and disposed of in your outside trash can.</p>
      <h3>I normally lock my gate, is this a problem?</h3>
      <p>
        You can leave your gate locked or unlocked for our visit. If you wish to
        leave it locked, you'll simply need to supply us with a key or lock
        combination. We can also loan you a lock that you can use on the days
        that we service your yard.
      </p>
      <h3>What if I don't need dog poop scooping service for a few weeks?</h3>
      <p>
        Just notify us at least one day ahead and we will put your account on
        hold.
      </p>
      <h3>Is it possible to get a one-time-only service?</h3>
      <p>Sure! One-time-only or short-term service cab be easily arranged.</p>
      <h3>What do you mean by 'Satisfaction Guaranteed'?</h3>
      <p>
        We promise that you will get service you are happy with, or you don't
        have to pay for it! We know our business depends on doing excellent work
        and it's the quality of our service on which we stake our success. We're
        working very hard to make our name (Doggie Doos And Don'ts ) mean
        reliable, high-quality service. We strive to provide perfect service,
        but if there is ever a time when our service is not completely
        satisfactory, please let us know right away. We will make it right,
        either by coming back to re-clean the yard within 24 hours, or by
        crediting your account so you won't be charged.
      </p>
    </>
  );
}
