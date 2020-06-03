import React from "react";
import "./Footer1.scss";
const Footer1 = () => {
  return (
    <footer className="site__footer footer1">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <img
              src="https://via.placeholder.com/240x70"
              alt="Footer logo"
              className="footer__logo"
            />
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores quaerat magnam natus illum dolore illo, excepturi quis
              in deleniti nihil esse earum quam ex facilis culpa eius modi
              consectetur eligendi?
            </p>
          </div>
          <div className="col-sm-6 col-md-4">
            <h5 className="footer__title">Pages</h5>
          </div>
          <div className="col-sm-6 col-md-4">
            <h5 className="footer__title">Get in touch</h5>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
