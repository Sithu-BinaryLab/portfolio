"use client";
import React from "react";
const PDFViewer = () => {
    return (
        <div>
            <iframe
                src="https://sithulwin.vercel.app/sithulwin.pdf"
                width="100%"
                className="h-screen"
            />
        </div>
    );
};
export default PDFViewer;