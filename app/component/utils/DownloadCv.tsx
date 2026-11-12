import Link from "next/link";
import React from "react";
import { FiDownload } from "react-icons/fi";
// href="./assets/documents/Abdulrahman_Ibrahim_CV_2025.pdf"
const DownloadCv = () => {
  return (
    <div className="w-fit">
      <Link href="https://drive.google.com/uc?export=download&id=1ZM5iYkgar63CwMvA8aI10TczWuZXCw08" download="Abdulrahman_Ibrahim_CV.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-shape flex items-center gap-3">
        Download CV
        <FiDownload size={17} aria-hidden="true" />
      </Link>
    </div>
  );
};

export default DownloadCv;
