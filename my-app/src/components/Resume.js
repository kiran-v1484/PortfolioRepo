import React from "react";

const Resume = () => {

  const downloadFile = () => {
    window.location.href = "./Kiran-Resume-pdf.pdf"
  }
  return (
    <div>
       <div className="button-div"><button id="blue-btn" onClick={downloadFile}>download PDF file</button></div>
      <div className="resume-div">
        <img src="./Kiran-Resume.jpg" alt="Kiran-Resume" />
      </div>
     
    </div>
  );
};

export default Resume;
