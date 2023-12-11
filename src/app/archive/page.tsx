import React from "react";

const Archivepages = () => {
  return (
    <div>
      <div className="flex space-x-3 text-white">
        <div>Back</div>
        <p>Brittany Chiang</p>
      </div>
      <div className="lg:mx-auto lg:flex h-screen lg:justify-center overflow-y-scroll mt-10">
        <div className="lg:w-1/12 text-white text-default">
          <div>Year</div>
        </div>

        <div className="lg:w-3/12 text-white text-default">
          <div>Project</div>
        </div>
        <div className="lg:w-2/12 text-white text-default">
          <div>Made at</div>
        </div>

        <div className="lg:w-3/12 text-white text-default ">
          <div>Built with</div>
        </div>

        <div className="lg:w-1/12 text-white text-default">
          <div>Link</div>
        </div>
      </div>
    </div>
  );
};

export default Archivepages;
