import React from "react";
import booknow from "../media/book-service-now-button-turd-3.6fee38c0.png";
import { Link } from "react-router-dom";

export default function BookServiceButton(props) {
  switch (props.alignment) {
    case "left":
      return (
        <>
          <Link to="/book-service">
            <img
              src={booknow}
              alt="Book Service Now"
              className="float-start book-img"
            />
          </Link>
        </>
      );
    case "right":
      return (
        <>
          <Link to="/book-service">
            <img
              src={booknow}
              alt="Book Service Now"
              className="float-end book-img"
            />
          </Link>
        </>
      );
    default:
      return (
        <>
          <div className="text-center">
            <Link to="/book-service">
              <img
                src={booknow}
                alt="Book Service Now"
                className="img-fluid book-img"
              />
            </Link>
          </div>
        </>
      );
  }
}
