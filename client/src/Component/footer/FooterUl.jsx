import React from "react";
import { FaCaretRight } from "react-icons/fa";

const FooterUl = (props) => {
  return (
    <div className="footer__ul">
      <h4 className="footer__ul__header">{props.header}</h4>
      <ul>
        {Object.entries(props).map(([key, value]) => {
          return (
            <li>
              
              <FaCaretRight className="arrow__icon" />
              {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterUl;
