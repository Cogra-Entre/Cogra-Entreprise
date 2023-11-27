import React from "react";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import "./App.css";

import LandingFirst from "./assets/landing/landingFirst.jpeg";
import LandingChicks from "./assets/landing/landingChicks.png";

export default function App() {
  return (
    <div className="mt-[15em]">
      <div className="top-home">
        <img
          src={LandingFirst}
          alt=""
          className="w-full h-[700px] object-cover"
        />
        <div className="sub-div">
          <h3>Farm to Farm</h3>
          <span>Order 1 week old chick today</span>
          <a
            className="bg-[#0f0] w-[100px] rounded-md py-1 px-2 outline-none text-white no-underline"
            href="https://wa.me/+254704412004"
          >
            Order Now
          </a>
        </div>
      </div>

      <div className="flex justify-center items-center py-[5em] gap-[5em] mobile:flex-col mobile:px-[15px]">
        <div className="flex flex-col gap-[10px] text-xl">
          <h1 className="font-bold text-4xl">Cogra Entreprise</h1>
          <span>
            <span className="font-bold">Cogra Entreprise </span>
            Farm is a company involved in chick production
            <br /> and ensures customer satisfaction by exceeding our client’s
            <br /> expectations in regard to production of the high quality
            clean, well <br /> sized and healthy 1 week old chicks.
          </span>

          <span>
            We are a fast growing poultry layer farm and we enjoy the reputation
            <br />
            in the market place as providers of healthy chicks with consistent
            <br />
            quality and applying robust scientific management practices coupled
            <br />
            with state-of the art technology.
          </span>
        </div>
        <img src={LandingChicks} alt={LandingChicks} />
      </div>

      <Footer />
    </div>
  );
}
