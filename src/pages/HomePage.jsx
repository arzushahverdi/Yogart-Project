import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://assets.website-files.com/5f36828308ea3b14a0500991/5f36828308ea3b6ef8500a16_hero-background-image.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
        backgroundAttachment: "fixed",
      }}
    >
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default HomePage;
