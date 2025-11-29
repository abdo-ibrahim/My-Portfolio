import Link from "next/link";
import React from "react";
import { FiDownload } from "react-icons/fi";
// href="./assets/documents/Abdulrahman_Ibrahim_CV_2025.pdf"
const DownloadCv = () => {
  return (
    <div className="w-fit mx-auto">
      <Link href="https://drive.google.com/uc?export=download&id=1u9Zer6L-QZsm-DpWFw_cQGW3Kk-UiZty" download="Abdulrahman_Ibrahim_CV.pdf" target="_blank" className=" btn btn-shape flex items-center gap-2 text-[13px] md:text-[16px] ">
        Download CV
        <FiDownload size={20} />
      </Link>
    </div>
  );
};

export default DownloadCv;
