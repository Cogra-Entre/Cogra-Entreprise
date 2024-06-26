import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";
// import "./../landing/landing.css";
import sendMail from "./../../assets/footer/sendMail.png";
import Email from "./../../assets/footer/Email.png";
import { navLinks } from "../../helpers/navbar.helpers";

export default function Footer() {
  return (
    <div className="footer">
      <div className="upperFooter">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span
            className="subscribe"
            style={{
              fontSize: "35px",
              marginBottom: "13px",
            }}
          >
            Subscribe to our weekly newsletter
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <input type="email" placeholder="Your Email" />
            <img
              src={sendMail}
              alt="sendMail.svg"
              style={{
                width: "25px",
                cursor: "pointer",
              }}
            />
          </div>
        </div>

        <img
          src={Email}
          alt="Email.png"
          className="email_storyset"
          style={{
            width: "450px",
          }}
        />
      </div>

      <div className="lowerFooter">
        <div>
          <h1>Bee Store</h1>
          <span>
            Your favourite honey store. Get <br /> delicious honey today!!!
          </span>
        </div>

        <div>
          <h3>Usefull Links</h3>

          <div className="flex flex-col gap-[6px]">
            {navLinks &&
              navLinks.map((link, index) => {
                return (
                  <NavLink to={link.href} key={index} className="text-white">
                    {link.tag}
                  </NavLink>
                );
              })}
          </div>
        </div>

        <div>
          <h3>Terms & Condition</h3>

          <div>
            <a href="#">Privacy Policy</a>
          </div>
        </div>

        <div>
          <h3>lets chat</h3>

          <div>
            <a href="mailto:kian99564@email.com">test@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}
