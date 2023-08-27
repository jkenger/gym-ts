import { ClassType } from "@/shared/types";
import React from "react";

type Props = {
  item: ClassType;
};

const Class = ({ item: { name, description, image } }: Props) => {
  const overLayStyles = `opacity-0 transition duration-500
   hover:opacity-90 p-5 absolute  z-10 flex h-[380px] 
   w-full flex-col items-center justify-center whitespace-normal bg-primary-500 text-center`;

  return (
    <li className="relative mx-4 inline-block h-[380px]">
      <div className={overLayStyles}>
        <p>{name}</p>
        <p>{description}</p>
      </div>
      <img
        alt={`${name}-image`}
        src={image}
        className="w-full h-full object-cover"
      />
    </li>
  );
};

export default Class;
