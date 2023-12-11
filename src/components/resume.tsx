import React from "react";
import { useRouter } from "next/navigation";

export const FullResumeComponent = () => {
  const router = useRouter();
  const goToResume = () => {
    router.push("/resume.pdf");
  };
  return (
    <div className="pt-10 pb-24 px-4">
      <span
        className="text-titleColor hover:border-b pb-2"
        onClick={goToResume}
      >
        View Full Résumé
      </span>
    </div>
  );
};
