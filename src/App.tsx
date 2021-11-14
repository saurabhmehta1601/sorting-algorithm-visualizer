import "./App.css"
import BarsContainer from "./components/BarsContainer"
import Header from "./components/Header"
import Footer from "./components/Footer";
import PlaybackControls from "./components/PlaybackControls";
import BarsControls from "./components/BarsControls";
import  styled  from  "styled-components"

function App() {
  return (
    <Page>
      <Header />
      <main>
          <BarsControls />
          <BarsContainer />
          <PlaybackControls  />
      </main>
      <Footer />
    </Page>
  );
}

const  Page  = styled.div`
  display:flex;
  flex-direction: column ;
  justify-content:space-around ;
  min-height:100vh ;

  main {
    flex: 1 ;
    display:flex ;
    flex-direction:column ;
    justify-content:space-evenly ;
  }
`

export default App;
