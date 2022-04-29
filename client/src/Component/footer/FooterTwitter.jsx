import React from "react";
import { FaTwitter } from "react-icons/fa";

const FooterTwitter = (props) => {
  return (
      <>

    <div className="footer__tweet">
    <h4 className="footer__ul__header">{props.header}</h4>
      <div className="twitter__box">
        <FaTwitter />
      </div>
      <p className="tweet__text">
        Looking to boost your productivity and your design career, to make 2022
        your most productive year yet? We've roun… twitter.com/i/web/status/1…
      </p>
    </div>
    </>
  );
};

export default FooterTwitter;
