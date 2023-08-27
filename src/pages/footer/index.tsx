import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import React from "react";
import Logo from "@/assets/Logo.png";

type Props = {
  setSelectedPage: (selectedPage: SelectedPage) => void;
};

const Footer = ({ setSelectedPage }: Props) => {
  return (
    <section id="footer" className="w-full bg-primary-100">
      <div className="w-5/6 mx-auto pt-24 pb-16">
        <div className="space-y-4">
          <div>
            <img src={Logo} alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            architecto eaque, quam dolores odit similique excepturi voluptatum
            cupiditate inventore possimus nostrum. Dolor blanditiis doloribus
            sint iste totam odit, voluptatum asperiores!
          </p>
          <p>
            <span>&copy; Evogym All Rights Reserved.</span>
          </p>
        </div>

        <div className="flex justify-between mt-8">
          <div className="space-y-4">
            <HText>Quick Links </HText>
            <ul className="space-y-2">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#benefits">Benefits</a>
              </li>
              <li>
                <a href="#ourclasses">Our Classes</a>
              </li>
              <li>
                <a href="#contactus">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col space-y-4 justify-between mt-8">
          <HText>Contact Us</HText>
          <p className="font-bold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Laboriosam, corporis!
          </p>
          <p>(63)906-884-8368</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
