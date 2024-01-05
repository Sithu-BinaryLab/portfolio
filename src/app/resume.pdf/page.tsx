import React from "react";

const PDFViewer = () => {
  return (
    <div className="h-screen">
      <iframe
        title="PDF Viewer"
        src="https://drive.google.com/file/d/11YgNERfxZ-qwJ6ZKsvrN_sxX77JiPd8d/view?usp=sharing"
        width="100%"
        height="700px" // Adjust the height as needed
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

export default PDFViewer;
