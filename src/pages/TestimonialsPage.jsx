import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";

const TestimonialsPage = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://assets.website-files.com/5f36828308ea3b14a0500991/5f36828308ea3b0a5c500a27_trainers-bg.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
