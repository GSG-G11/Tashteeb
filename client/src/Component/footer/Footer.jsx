import React from "react";
import FooterHeader from "./FooterHeader";
import "./footer.css";
import FooterUl from "./FooterUl";
import { FaCaretRight } from "react-icons/fa";
import FooterTwitter from "./FooterTwitter";
import img1 from "../../images/i1.jpg";
const Footer = () => {
  return (
    <div className="footer">
      <FooterHeader />
      <div className="footer__ul__wrapper">
        <FooterUl
          header="Contact Us"
          li1="Gaza - Palestine"
          li2="tashteeb@support.com"
          li3="+972 - 592 - 100 - 443"
        />
        <FooterUl
          header="Services"
          li1="Circuits & Wiring"
          li2="Construction Meterials"
          li3="Remodels"
          li4="Tools"
        />
        <FooterTwitter header="Twitter" />

      </div>
    </div>
  );
};

export default Footer;
