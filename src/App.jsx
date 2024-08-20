import "./App.css";
import Navbar from "./components/Layouts/Navbar";
import SlideChangerBtn from "./components/SlideChangerBtn";
import Header from "./components/Layouts/Header";
import NavSmallScreens from "./components/Layouts/NavSmallScreens";
import About from "./components/Layouts/About";
function App() {
  return (
    <>
      {/* <NavSmallScreens /> */}
      {/* <Navbar /> */}
      {/* <SlideChangerBtn /> */}
      <Header />
      <About />
    </>
  );
}

export default App;
