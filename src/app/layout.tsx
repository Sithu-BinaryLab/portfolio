// "use client"
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Si Thu Lwin | Frontend Developer",
  description: "Senior Frontend Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [spotlightPosition, setSpotlightPosition] = useState({ x: 0, y: 0 });

  // const handleMouseMove = (e: any) => {
  //   setSpotlightPosition({ x: e.clientX, y: e.clientY });
  // };

  return (
    <html lang="en">
      <body
        className={inter.className}
        // onMouseMove={handleMouseMove}
        // style={{
        //   background: `radial-gradient(600px at ${spotlightPosition.x}px ${spotlightPosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
        // }}
      >
        {children}
      </body>
    </html>
  );
}
