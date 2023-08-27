import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-10 w-10 text-gray-900" />,
    title: "State of the Art Facilities",
    description:
      "We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.",
  },
  {
    icon: <UserGroupIcon className="h-10 w-10 text-gray-900" />,
    title: "100's of Diverse Classes",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio aliquam nihil quasi nulla a voluptatibus reprehenderit consectetur possimus mollitia iusto, sequi qui blanditiis, animi fugiat quas eligendi ducimus magni aperiam.",
  },
  {
    icon: <AcademicCapIcon className="h-10 w-10 text-gray-900" />,
    title: "Export and Pro Trainers",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio aliquam nihil quasi nulla a voluptatibus reprehenderit consectetur possimus mollitia iusto, sequi qui blanditiis, animi fugiat quas eligendi ducimus magni aperiam.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

type Props = {
  setSelectedPage: (selectedPage: SelectedPage) => void;
};

function Benefits({ setSelectedPage }: Props) {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20 ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <div>
          <HText className="uppercase">More Than Just Gym.</HText>
        </div>
        <p className="max-w-xl text-sm my-5">
          We provide world class fitness equipment, trainers and classes to get
          you to your ultimate fitness goals with ease. We provide true care
          into each and every member.
        </p>
      </motion.div>

      {/* Benefits */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={container}
        className="md:flex items-center justify-between gap-8 md:mt-5"
      >
        {benefits.map((benefit) => (
          <Benefit
            key={benefit.title}
            benefit={benefit}
            setSelectedPage={setSelectedPage}
          />
        ))}
      </motion.div>

      {/* Graphics and Description */}
      <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
        <motion.img
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mx-auto"
          alt="benefits-page-graphic"
          src={BenefitsPageGraphic}
        />

        <div>
          {/* Title */}
          <div className="relative">
            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <HText className="uppercase">
                  Millions of Happy Members Getting{" "}
                  <span className="text-primary-500">Fit</span>
                </HText>
              </motion.div>
            </div>
          </div>
          {/* Description */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="my-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusamus quis officia doloremque commodi voluptatibus doloribus
              modi cupiditate odit alias unde animi non ratione aperiam
              reprehenderit vitae aliquid, nihil illo ut.
            </p>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              quisquam dolor nisi doloremque magnam facere exercitationem autem
              praesentium, sit alias quia ex maiores velit ratione? Aperiam modi
              deleniti numquam delectus?
            </p>
          </motion.div>
          {/* Button */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="relative mt-16"
          >
            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Us
              </ActionButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
