import React from "react";

const PDFViewer = () => {
    return (
        <div>
            <iframe
                title="PDF Viewer"
                src="https://drive.google.com/file/d/1eIM4IH_BHraDB12nL3zJEhuQuBmgG0gg/preview"
                width="100%"
                height="500px"  // Adjust the height as needed
                frameBorder="0"
                allowFullScreen
            />
        </div>
    );
};

export default PDFViewer;
