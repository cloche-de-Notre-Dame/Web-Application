import React from "react";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { About } from "../components/About";
import { Skill } from "../components/Skill";
import { Values } from "../components/Values";
import { Future } from "../components/Future";
import { Footer } from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Main />
        <About />
        <Skill />
        <Values />
        <Future />
      </main>
      <Footer />
    </>
  );
};
export default Home;
