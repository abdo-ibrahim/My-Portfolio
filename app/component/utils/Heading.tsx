import React from "react";

type Props = {
  heading: string;
  subheading: string;
};

const Heading = ({ heading, subheading }: Props) => {
  return (
    <div className="text-center py-7 md:py-9 px-3">
      <h2 className="main-heading text-effect">{heading}</h2>
      {subheading && <p className="max-w-[620px] mx-auto text-[14px] sm:text-[15px] mt-3">{subheading}</p>}
    </div>
  );
};

export default Heading;
