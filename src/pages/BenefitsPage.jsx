import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Benefits from "../components/Benefits/Benefits";
import Footer from "../components/Footer/Footer";

const BenefitsPage = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://assets.website-files.com/5f36828308ea3b14a0500991/5f36828308ea3b905b5009fe_abstract-bg.svg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Benefits />
      <Footer />
    </div>
  );
};

export default BenefitsPage;
