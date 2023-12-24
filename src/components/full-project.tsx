"use client";
import React from "react";
import { useRouter } from "next/navigation";

export const FullProjectComponent = () => {
  const router = useRouter();
  const goToArchive = () => {
    router.push("/archive");
  };
  return (
    <div className="pt-2 pb-24" onClick={goToArchive}>
      <span className="text-titleColor hover:border-b hover:border-white pb-2">
        View Full Project Archive
      </span>
    </div>
  );
};
