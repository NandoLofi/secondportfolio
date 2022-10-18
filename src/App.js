import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


function App() {
  return (
    <div className="w-screen h-full">
      <Navbar/>
      <h1 className="text-3xl font-bold">Hello</h1>
      <Home/>
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
