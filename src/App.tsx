import SelectionSort from "./algorithms/SelectionSort";
import "./App.css"
import React from 'react';
import BarsContainer from "./components/BarsContainer"
import Header from "./components/Header"
import Footer from "./components/Footer";
import PlaybackControls from "./components/PlaybackControls";
import BarsControls from "./components/BarsControls";
import { useSelector } from "react-redux";

function App() {
  console.log("selection sort", SelectionSort([1,56,23,89,22,-1]))
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
