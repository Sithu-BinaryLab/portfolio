import React from "react";

interface aboutProps {
  aboutRef: any;
}

export const AboutComponent = ({ aboutRef }: aboutProps) => {
  return (
    <div className="" id="about" ref={aboutRef}>
      <div className="sticky top-0 z-20 -ml-6 -mr-14 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>

      <p className="text-primaryColor">
        Having embarked on my academic journey at Technology University in{" "}
        <span className="text-highLightColor">2014</span>, I earned a degree
        with a major in Information Technology. Throughout my university years,
        I immersed myself in a comprehensive curriculum, specializing in
        <span className="text-highLightColor"> Networking</span>,{" "}
        <span className="text-highLightColor">Programming</span>,{" "}
        <span className="text-highLightColor">Database Management</span>,{" "}
        <span className="text-highLightColor">Cloud Computing</span>,{" "}
        <span className="text-highLightColor">AI</span>, and{" "}
        <span className="text-highLightColor">Web Development</span>.
        {/* Reflecting on those formative years, I cherish the unique experiences of student
        life and carry forward a passion for continuous learning and innovation. */}
      </p>
      <p className="text-primaryColor pt-6">
        Proficient in Java, PHP, and JavaScript, I specialize in AI development
        and have successfully brought my own conceptualized applications and
        websites to life.
        {/* Currently,  */} &nbsp;I am &nbsp;
        {/* deepening my expertise by delving into
        React Native and C# programming,  */}
        aiming to enhance my capabilities for a diverse range of development
        projects.
      </p>

      <p className="text-primaryColor pt-6">
        When away from coding, I indulge in the pleasures of{" "}
        <span className="text-highLightColor">reading</span> and{" "}
        <span className="text-highLightColor">movies</span>, finding solace in
        the written word and cinematic narratives. I take joy in extending a
        helping hand to friends, fostering a sense of connection and shared
        well-being.
      </p>
    </div>
  );
};
