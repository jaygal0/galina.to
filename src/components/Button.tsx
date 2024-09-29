import React from "react";

const Button = ({
  cta,
  link,
  flex,
  secondary,
}: {
  cta: string;
  link?: string;
  flex?: Boolean;
  secondary?: Boolean;
}) => {
  return (
    <a href={link} target="_blank" className={flex && "flex-start"}>
      <div className={secondary && "secondary"}>{cta}</div>
    </a>
  );
};

export default Button;
