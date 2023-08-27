import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  setSelectedPage: (page: SelectedPage) => void;
  children?: React.ReactNode;
};

const ActionButton = ({ setSelectedPage, children }: Props) => {
  return (
    <AnchorLink
      className=" bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover: text-white transition duration-500"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
