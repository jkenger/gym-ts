import React from "react";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode;
}

const HText = ({ children, ...props }: Props) => {
  return (
    <h1
      {...props}
      className={`basis-3/5 font-montserrat text-3xl font-bold ${props.className}`}
    >
      {children}
    </h1>
  );
};

export default HText;
