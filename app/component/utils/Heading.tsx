import React from "react";

type Props = {
  heading: string;
  subheading: string;
};

const Heading = ({ heading, subheading }: Props) => {
  return (
    <div className="text-center py-6">
      <h2 className="main-heading text-effect">{heading}</h2>
      {subheading && <p className=" max-w-[500px] mx-auto text-[14px]">{subheading}</p>}
    </div>
  );
};

export default Heading;
