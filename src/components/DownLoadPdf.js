import React from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { MdDownload } from "react-icons/md";

const DownloadPage = ({ roofElementId, downloadFileName, img }) => {
  const downloadFileDocument = () => {
    const input = document.getElementById(roofElementId);
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL(img);
      const pdf = new jsPDF("p", "pt", "a2");
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save(downloadFileName);
    });
  };

  return (
    <div>
      <button
        onClick={downloadFileDocument}
        className="btn btn-warning font-bold mr-5 hover:bg-yellow-500"
      >
        <MdDownload className="text-2xl" />
        <span> Download pdf</span>
      </button>
    </div>
  );
};

export default DownloadPage;
