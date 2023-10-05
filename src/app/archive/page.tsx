import React from "react";

const Archivepages = () => {
  return (
    <div className="lg:mx-auto lg:flex h-screen lg:justify-center overflow-y-scroll">
      <div className="lg:w-1/12 text-white">
        <div>Year</div>
      </div>

      <div className="lg:w-3/12 text-white ">
        <div>Project</div>
      </div>
      <div className="lg:w-2/12 text-white">
        <div>Made at</div>
      </div>

      <div className="lg:w-3/12 text-white ">
        <div>Built with</div>
      </div>

      <div className="lg:w-1/12 text-white ">
        <div>Link</div>
      </div>
    </div>
  );
};

export default Archivepages;
