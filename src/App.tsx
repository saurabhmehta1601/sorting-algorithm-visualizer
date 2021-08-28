import "./App.css"
import React from 'react';
import BarsContainer from "./components/BarsContainer"
import Header from "./components/Header"
import Footer from "./components/Footer";
import PlaybackControls from "./components/PlaybackControls";
import AlgoSelector from "./components/AlgoSelector";
import { useSelector } from "react-redux";

function App() {

  return (
    <>
    <Header />
    <main>
        <AlgoSelector />
        <BarsContainer />
        <PlaybackControls  />
    </main>
    <Footer />
    </>
  );
}

export default App;
