import React from "react";
import { Stack } from "react-bootstrap";
import sarah from "../media/testimonial-1.3e8e31f1.jpg";
import frank from "../media/testimonial-2.7c1d260b.jpg";
import rhonda from "../media/testimonial-3.9f1788e7.jpg";
import richard from "../media/testimonial-4.dddcd95d.jpg";

export default function ImageTestimonials() {
  return (
    <>
      <Stack gap={5}>
        <div>
          <img src={sarah} alt="Testimonial from Sarah" className="img-fluid" />
          <p>
            &quot;My dog, Lulu, loves to go for long walks at sunset with Doggie
            Doos and Don'ts, while I love when they de-turd my yard! These guys
            rock and are fast and reliable.&quot; <em>&mdash; Sarah</em>
          </p>
        </div>
        <div>
          <img src={frank} alt="Testimonial from Frank" className="img-fluid" />
          <p>
            &quot;Our mastiff, Basil, has the biggest dookies we've ever seen
            and none of us wanna go anywhere near them! Thanks for doing our
            'dirty work', Rachel!&quot; <em>&mdash; Frank</em>
          </p>
        </div>
        <div>
          <img
            src={rhonda}
            alt="Testimonial from Rhonda"
            className="img-fluid"
          />
          <p>
            &quot;They keep my kitty good company when I'm out of town and I always know she will be excellently cared for.&quot; <em>&mdash; Rhonda</em>
          </p>
        </div>
        <div>
          <img
            src={richard}
            alt="Testimonial from Richard and Beverly"
            className="img-fluid"
          />
          <p>
            &quot;We are from North Carolina and came to Oregon for an extended two-month vacation. The backyard of our Air BnB rental house began to stink fast, thanks to our two labs. Doggie Doos and Don'ts was happy to accomodate our situation with weekly poop scooping until we left. We can't thank them enough for being so friendly and accommodating.&quot; <em>&mdash; Richard &amp; Beverly</em>
          </p>
        </div>
      </Stack>
    </>
  );
}
