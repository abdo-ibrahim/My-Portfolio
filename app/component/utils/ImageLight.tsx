import React from "react";
import light from "../../assets/images/light.png";
import Image from "next/image";

const ImageLight = () => {
  return <Image src={light} alt="decorative light" className="absolute w-full h-full object-cover select-none no-select pointer-events-none" />;
};

export default ImageLight;
