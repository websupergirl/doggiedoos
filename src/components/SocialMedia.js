import React from "react";
import { Stack } from "react-bootstrap";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

export default function SocialMedia() {
  return (
    <>
      <Stack gap={3}>
        <div className="text-center">Connect with us!</div>
        <div className="text-center">
          <a
            href="https://www.facebook.com/DoggieDoosAndDonts/"
            rel="noopener"
            aria-label="Facebook"
          >
            <FaFacebookSquare size={70} />
          </a>
        </div>
        <div className="text-center">
          <a
            href="https://www.instagram.com/doggiedoosanddonts/"
            rel="noopener"
            aria-label="Facebook"
          >
            <FaInstagramSquare size={70} />
          </a>
        </div>
        <div className="text-center">
          <a
            href="https://twitter.com/doggiedoosndont"
            rel="noopener"
            aria-label="Facebook"
          >
            <FaTwitterSquare size={70} />
          </a>
        </div>
      </Stack>
    </>
  );
}
