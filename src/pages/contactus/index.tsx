import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import { SelectedPage } from "@/shared/types";
import HText from "@/shared/HText";

type Props = {
  setSelectedPage: (selectedPage: SelectedPage) => void;
};

const Contactus = ({ setSelectedPage }: Props) => {
  const inputStyles = `w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

  const {
    register,
    reset,
    formState: { errors },
    trigger,
  } = useForm();
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
      reset();
    }
  }
  return (
    <section id="contactus" className="mx-auto w-full">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        className="flex flex-col items-center justify-center w-5/6 mx-auto pt-28 pb-24"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:w-3/5"
        >
          <HText className="uppercase">
            <span className="text-primary-500">Join Now</span> Get in Shape
          </HText>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            vel impedit pariatur suscipit deserunt. Id reprehenderit ratione
            quam cumque tempore.
          </p>
        </motion.div>

        {/* Form and Image */}
        <div className=" mt-10 justify-between gap-8 w-full md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0 mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              method="POST"
              action="https://formsubmit.co/johnkgervacio@gmail.com "
              target="_blank"
              onSubmit={onSubmit}
              className="space-y-4"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.type === "required" && "Name is required"}
                  {errors.name.type === "maxLength" && "Max length exceeded"}
                </span>
              )}

              <input
                className={inputStyles}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.type === "required" && "Email is required"}
                  {errors.name.type === "pattern" && "Invalid Email"}
                </span>
              )}

              <textarea
                rows={4}
                cols={50}
                className={inputStyles}
                placeholder="MESSAGE"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.type === "required" && "Message is required"}
                  {errors.name.type === "maxLength" &&
                    "Max length exceeded 200 words"}
                </span>
              )}
              <button
                type="submit"
                className=" bg-secondary-400 text-primary-500 rounded-lg py-3 px-5 mt-5"
              >
                Submit
              </button>
            </form>
          </motion.div>
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
              <img
                className="w-full"
                alt="contact-us-page-graphic"
                src={ContactUsPageGraphic}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contactus;
