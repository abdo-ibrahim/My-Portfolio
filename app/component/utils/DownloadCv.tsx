import Link from "next/link";
import React from "react";
import { FiDownload } from "react-icons/fi";
// href="./assets/documents/Abdulrahman_Ibrahim_CV_2025.pdf"
const DownloadCv = () => {
  return (
    <div className="w-fit mx-auto">
      <Link href="https://drive.google.com/uc?export=download&id=1WTcKASJdji9xgnV90S8YZ8wk6Rh3SBu3" download="Abdulrahman_Ibrahim_CV.pdf" target="_blank" className=" btn btn-shape flex items-center gap-2 text-[13px] md:text-[16px] ">
        Download CV
        <FiDownload size={20} />
      </Link>
    </div>
  );
};

export default DownloadCv;
