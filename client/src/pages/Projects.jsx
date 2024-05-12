import React from "react";
import CallToAction from "../components/CallToAction";

const Projects = () => {
  return (
    <div className="min-h-screen max-w-2xl mx-auto items-center justify-center flex flex-col p-3 gap-6">
      <h1 className="text-3xl font-semibold">Project's</h1>
      <p className="text-md text-gray-500 ">
        Blog tentang sbuah pergerakan diman pergerakan ini membutuhkan suatu
        perubahan yang signifikan bigi masayarakt sekitar.
      </p>
      <CallToAction />
    </div>
  );
};

export default Projects;
