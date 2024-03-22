import React from "react";
import "./common.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Common = () => {

  const handleRedirect = (url) => {
    window.open(url, '_blank');
  };

  return (
    <>
      <div className="common-main">
        <div className="common-container">
          <div className="common-4">
            <h4> BLACK HORSE</h4>
            <p>We provide the best services for you</p>
          </div>

          <div className="common-4">
            <h4>QUICK LINKS</h4>
            <p>
              <a href="/contact#contact1">Contact</a>
            </p>
            <p>
              <a href="/service#service1">Services</a>
            </p>
          </div>
          <div className="common-4">
            <h4>CONTACT</h4>
            <p>blackhorse.tls@gmail.com</p>
            <p>+1 781 7773922</p>
            <div className="common-icon">
              <div className="common-i" onClick={() => handleRedirect('https://www.instagram.com/black_horse_livery_service/')}>
                <FacebookIcon />
              </div>
              <div className="common-i" onClick={() => handleRedirect('https://www.instagram.com/black_horse_livery_service/')}>
                <InstagramIcon />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="footer">
          <p>© Copyright 2023 Black Horse All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Common;
