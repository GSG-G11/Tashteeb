import React from 'react';
import FooterHeader from './FooterHeader';
import './footer.css';
import FooterUl from './FooterUl';
import FooterTwitter from './FooterTwitter';

function Footer() {
  return (
    <div className="footer">
      <FooterHeader />
      <div className="footer__ul__wrapper">
        <FooterUl
          header="Contact Us"
          data={[
            'Gaza - Palestine',
            'tashteeb@support.com',
            '+972 - 592 - 100 - 443',
          ]}
        />
        <FooterUl
          header="Services"
          data={[
            'Circuits & Wiring',
            'Construction Meterials',
            'Remodels',
            'Tools',
          ]}
        />
        <FooterTwitter header="Twitter" />
      </div>
    </div>
  );
}

export default Footer;
