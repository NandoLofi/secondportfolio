import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


function App() {
  return (
    <div>
      <Navbar/>
      <h1 className="text-3xl font-bold">Hello</h1>
      <Home/>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
