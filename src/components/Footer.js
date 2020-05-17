import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <footer>
      <a href="https://www.facebook.com">
        <FontAwesomeIcon id="facebook" size="4x" icon={faFacebook} />
        <p>facebook.com/hatemets</p>
      </a>

      <a href="https://www.instagram.com">
        <FontAwesomeIcon id="instagram" size="4x" icon={faInstagram} />
        <p>instagram.com/hatemets</p>
      </a>

      <a href="mailto:heidmetsmark@gmail.com">
        <FontAwesomeIcon id="email" size="4x" icon={faEnvelope} />
        <p>heidmetsmark@gmail.com</p>
      </a>
    </footer>
  );
};
