import React from "react";
import paypal from "../media/paypal.png";

export default function PayBill() {
  return (
    <>
      <h1>Pay Bill</h1>
      <p>
        Now, you can quickly and conveniently pay your Doggie Doos and Don'ts
        bill online. Send a payment via PayPal below. Feel free to contact us if
        you have any questions or concerns.
      </p>
      <a
        href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=XGFHUZP2PM9V6&source=url"
        rel="noopener"
        aria-label="Pay Bill"
      >
        <img src={paypal} alt="Pay with Paypal" />
      </a>
    </>
  );
}
