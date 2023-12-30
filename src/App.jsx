import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Header />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
