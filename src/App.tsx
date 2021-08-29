import "./App.css"
import React from 'react';
import BarsContainer from "./components/BarsContainer"
import Header from "./components/Header"
import Footer from "./components/Footer";
import PlaybackControls from "./components/PlaybackControls";
import BarsControls from "./components/BarsControls";
import { useSelector } from "react-redux";

function App() {

  return (
    <>
    <Header />
    <main>
        <BarsControls />
        <BarsContainer />
        <PlaybackControls  />
    </main>
    <Footer />
    </>
  );
}

export default App;
