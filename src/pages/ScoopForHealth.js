import React from "react";
import didyouknow from "../media/did-you-know.2296a233.png";
import BookServiceButton from "../components/BookServiceButton.js";

export default function ScoopForHealth() {
  return (
    <>
      <BookServiceButton alignment="left" />
      <p>
        People may not be aware of how important it is to scoop dog poop from
        areas around your house you share with your pet. In addition to just
        being plain gross, accumulated dog poop can also pose some threats to
        the health of both humans and pets. There are several pathogens and
        parasites in animal waste that could infect children, pets, and
        yourself. It's always a good idea to call in some turd burglars like us,
        in order to keep you yard clean and sanitary for all who visit it.
      </p>
      <img src={didyouknow} alt="Did You Know" class="float-end" />
      <p>
        Here are just a few factors that you should be aware of, when it comes
        to accumulated fecal matter:
      </p>
      <ol>
        <li>
          Zoonotic Diseases (passed from animal to human). Children and infants
          are the most vulnerable. Considerations are roundworm (lingers in the
          soil), Toxacara Canis, which can cause blindness. Hookworms.
          Campylobacter (Campylobacteriosis &mdash; a bacterial infection
          carried by dogs and cats that frequently causes diarrhea in humans),
          Adenovirus, E. coli, Listeria, Toxocariasis &mdash; roundworms usually
          transmitted from dogs to humans, often without noticeable symptoms,
          but may cause vision loss, a rash, fever, or cough. And this is just a
          partial list.
        </li>
        <li>
          Urban and storm water pollution. The EPA and many state and local
          agencies are learning and reporting on the dangers and effects of dog
          waste on waterways. The Environmental Protection Agency (EPA) even
          estimates that two or three days worth of droppings from a population
          of about 100 dogs would contribute enough bacteria to temporarily
          close a bay, and all watershed areas within 20 miles of it, to
          swimming and shell fishing.
        </li>
        <li>
          Dog waste does NOT make good fertilizer. It contains microorganisms
          from your dog’s digestive system that can be passed along to plants. A
          person can become very ill by eating fruits or veggies
          &quot;fertilized&quot; with dog feces. Also, compost piles may not get
          hot enough to kill disease-causing organisms. Our dogs don't use the
          toilet. Rain and irrigation washes the waste into creeks, storm drains
          &amp; street runoff (which isn’t treated at waste water plants). We
          always double-bag collected dog waste and dispose of it in your
          outside trash can.
        </li>
      </ol>
      <p>
        Remember, when your dog goes on the lawn, it doesn't just stay on the
        lawn! To learn more about how dog poop impacts the environment, click
        here. And remember if you don't want to scoop dog poop, give us a call
        and we'll come do it for you!
      </p>
    </>
  );
}
