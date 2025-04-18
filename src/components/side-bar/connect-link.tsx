import React from "react";

// icons
import GithubIcon from "../../../public/icons/github-icon";
import LinkedInIcon from "../../../public/icons/linkedin-icon";
import MailIcon from "../../../public/icons/mail-icon";

const ConnectLink = () => {
  return (
    <div className="flex space-x-3">
      <GithubIcon />
      <LinkedInIcon />
      <MailIcon />
    </div>
  );
};

export default ConnectLink;
