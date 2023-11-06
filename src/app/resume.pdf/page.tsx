"use client";
import React from "react";
import { Document, Page } from "react-pdf";
const PDFViewer = () => {
  const pdfURL = "/cv/resume.pdf";

  console.log("Pdf name:", pdfURL);
  return (
    <div className="bg-white">
      <Document file="https://docs.google.com/document/d/1CUCNu220L3bmCJEjPdYjfA0NZh0G2ibMsIaz5xgW1Mk/edit?usp=drive_link">
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};
export default PDFViewer;
