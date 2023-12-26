import React from "react";
import { useRouter } from "next/navigation";

export const FullResumeComponent = () => {
  const router = useRouter();
  const goToResume = () => {
    router.push("/resume.pdf");
  };
  return (
    <div className="py-10">
      <span
        className="cursor-pointer text-titleColor hover:border-b pb-2"
        onClick={goToResume}
      >
        View Full Résumé
      </span>
    </div>
  );
};
