import React from "react";
import Navbar from "../components/navbar";

const Home = () => {
  return (
    <div>
      <section id="banner" className="banner">
        <div className="bg-overlay">
          <Navbar />
        </div>
      </section>
    </div>
  );
};

export default Home;
