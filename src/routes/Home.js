import React from "react";
import Header from "components/Header";
import "scss/Home.scss";
import Showcase from "components/Showcase";
import Stats from "components/Stats";
import Cli from "components/Cli";

function Home() {
  return (
    <div className="Home">
      <Header />
      <Showcase />
      <Stats />
      <Cli />
    </div>
  );
}

export default Home;
