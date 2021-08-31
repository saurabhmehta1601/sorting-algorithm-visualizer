import "./App.css"
import BarsContainer from "./components/BarsContainer"
import Header from "./components/Header"
import Footer from "./components/Footer";
import PlaybackControls from "./components/PlaybackControls";
import BarsControls from "./components/BarsControls";

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
