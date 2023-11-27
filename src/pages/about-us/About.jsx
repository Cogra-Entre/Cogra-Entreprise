import React from "react";
import Footer from "../../components/footer/footer";

import Chicks from "./../../assets/about/chicks.png";

export default function About() {
  return (
    <div className="mt-[15em]">
      <div className="flex justify-center items-center gap-[4em] py-[2em] mobile:flex-col-reverse mobile:px-4">
        <img src={Chicks} alt={Chicks} />

        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-3xl">About Cogra Entreprise</h1>
          <h3 className="font-bold text-xl italic">
            Delivering 1 week old chicks
          </h3>

          <span>
            Looking for healthy one-week-old chicks? <br /> Look no further than{" "}
            <span className="font-bold italic">Cogra Entreprise! </span>
            We <br /> prioritize the well-being of you and your
            <br />
            family. At Cogra, we take pride in our <br /> commitment to health
            and transparency.
          </span>

          <span>
            Our chicks are raised with care, and we <br /> ensure their health
            by preparing our own <br /> chicken feeds at home. We believe in a
            <br />
            natural approach, avoiding the use of growth <br /> hormones or
            unnecessary medications on <br /> our farm. Additionally, our
            farming process is open <br /> to scrutiny, allowing our clients to
            see <br />
            firsthand the quality and dedication <br /> that goes into raising
            our chicks.
          </span>
        </div>
      </div>

      <Footer />
    </div>
  );
}
