import "./App.css"
import React from 'react';
import BarsContainer from "./components/BarsContainer"
import Header from "./components/Header"
import Footer from "./components/Footer";

function App() {

  return (
    <>
    <Header />
    <main>
        <BarsContainer />
    </main>
    <Footer />
    </>
  );
}

export default App;
