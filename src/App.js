
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/index";
import Header from "./components/Header/index";
import Home from "./components/About/index";
import Projects from "./components/Projects/index";
import Footer from "./components/Footer/index";



function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Home/>
      <Projects/>
      <Footer/>
    </>
  );
}

export default App;
