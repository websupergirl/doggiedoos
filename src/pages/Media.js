import React from "react";

export default function Media() {
  return (
    <>
      <h1>Media</h1>
      <p>
        When KVAL news featured Doggie Doos and Don'ts on one of their nightly
        news segments, we were honored to have our hard work spotlighted in the
        media and to bring awareness of our services to the community. Enjoy the
        video and story below, to learn about what we do!
      </p>
      <div className="text-center">
        <iframe
          title="KVAL Newa"
          src="https://kval.com/embed/news/local/how-doo-you-clean-up-after-your-dog"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          width="640px"
          height="360px"
          className="embed-responsive-item"
          allow="autoplay 'self'; fullscreen 'self'"
        >
          Loading...
        </iframe>
      </div>
      <h3>How Doo You Clean Up After Your Dog</h3>
      <p>
        EUGENE, Ore. – Admit it: picking up after your dog is not the highlight
        of your day. But you've got to take care of the &quot;doo&quot; somehow,
        right? Rachel Azzato thinks there's a business in helping folks clean up
        after their dogs. &quot;Our motto is we pick up the doo so you don't
        have to,&quot; she said. Azzato and her team at Doggy Do's and Dont's
        will come to your house and do it for you for as little as $10 a week.
        Azzato said she got the idea after she became a certified dog trainer.
        &quot;Everybody's least favorite thing to do is pick up the doo,&quot;
        she said, &quot;so I decided I would advertise for picking up dog
        poop.&quot; She said she is seeing more and more clients every day.
        &quot;A lot of people are retired or have bad backs,&quot; she said.
        &quot;We have people that are single parents, work two jobs. we have
        couples that just don't want to do it when they have free time.&quot;
        Bob and Sherry Fleck have been using the service for their dog Argo for
        a few months. &quot;I don't have to worry about whether it's being taken
        care of properly because I know it is,&quot; Bob Fleck said. They said
        it's getting harder for them to bend down to pick doo up, which is why
        this service really helps out. &quot;You can’t beat it,&quot; Fleck
        said. &quot;It's reasonable.&quot; That's something that Azzato has
        built her business on. &quot;It's really affordable, we want everyone to
        afford it and for it to be a luxury for everybody.&quot;
      </p>
      <p>
        <em>
          As featured on{" "}
          <a
            href="https://kval.com/news/local/how-doo-you-clean-up-after-your-dog"
            rel="noopener"
            aria-label="Facebook"
          >
            KVAL News
          </a>
        </em>
      </p>
    </>
  );
}
