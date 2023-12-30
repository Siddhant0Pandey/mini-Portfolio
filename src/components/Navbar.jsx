import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(true);

  function handleScroll() {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`nav ${scrolled ? "nav_scroll" : ""}`}>
      <div className="container nav_bar">
        <div className="logo">
          <a href="Home">
            {" "}
            <h1>SIDDHANT</h1>
          </a>
        </div>
        <div className="nav_links">
          <ul>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#Skill">Skill</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Footer">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
