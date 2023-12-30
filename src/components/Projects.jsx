export default function Projects() {
  return (
    <div className="projects_section" id="Projects">
      <h1>My Projects</h1>

      <div className="projects_container">
        <div className="projects">
          <a href="https://www.example.com">
            <img src="./src/images/image1.jpg" alt="MY Project" />
          </a>
        </div>
        <div className="projects">
          <a href="https://www.example.com">
            {" "}
            <img src="./src/images/image2.jpg" alt="My Project" />
          </a>
        </div>
        <div className="projects">
          <a href="https://www.example.com">
            {" "}
            <img src="./src/images/image3.jpg" alt="My Project" />
          </a>
        </div>
      </div>
    </div>
  );
}
