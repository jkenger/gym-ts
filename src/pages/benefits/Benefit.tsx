import { motion } from "framer-motion";
import { BenefitType, SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  benefit: BenefitType;
  setSelectedPage: (selectedPage: SelectedPage) => void;
};

export default function Benefit({
  benefit: { icon, title, description },
  setSelectedPage,
}: Props) {
  return (
    <motion.div
      variants={childVariant}
      //   onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      className="mt-5 rounded-md border-2 border-gay-100 px-5 py-16 text-center"
    >
      <div className="mb-5 flex justify-center">
        <div className=" rounded-full border-2 border-gray-100 bg-primary-100 p-4 ">
          {icon}
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="m-3">{description}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.Benefits}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  );
}
