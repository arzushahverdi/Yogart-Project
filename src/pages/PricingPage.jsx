import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Pricing from "../components/Pricing/Pricing";
import Footer from "../components/Footer/Footer";

const PricingPage = () => {
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
      <Pricing />
      <Footer />
    </div>
  );
};

export default PricingPage;
