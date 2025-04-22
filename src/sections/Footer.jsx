import React from "react";
import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col items-center justify-center md:items-start">
          <a href="/">Thank You for Visiting!</a>
        </div>
        <div className="socials">
          {socialImgs.map((img) => (
            <a className="icon" target="_blank" href={img.url} key={img.url}>
              <img src={img.imgPath} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            &copy; {new Date().getFullYear()} Vitor Brefore. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
