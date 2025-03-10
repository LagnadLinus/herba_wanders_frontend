



import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#041804] text-center p-6">
      <h1 className="text-3xl md:text-5xl font-bold text-[#ffffff] mb-4">
        Website Under Maintenance
      </h1>
      <p className="text-lg text-white max-w-3xl mx-auto">
        We are currently working on improvements to enhance your experience. Please check back soon!
      </p>
      <img 
        src="/static/maintenance.png"
        alt="Maintenance"
        className="mt-6 w-48 md:w-56 object-contain mx-auto"
      />
      <a href="https://www.flaticon.com/free-icons/maintenance" title="maintenance icons">
      Maintenance icons created by redempticon - Flaticon</a>
    </div>
  );
};

export default Home;
