// import img1 from "public/images/image1.jpg";
// import img2 from "public/images/image2.jpg";
// import img3 from "public/images/image3.jpg";
import img1 from "/public/images/image1.jpg";
import img2 from "/public/images/image2.jpg";
import img3 from "/public/images/image3.jpg";

export default function Projects() {
  return (
    <div className="projects_section" id="Projects">
      <h1>My Projects</h1>

      <div className="projects_container">
        <div className="projects">
          <a href="https://www.example.com">
            <img src={img1} alt="MY Project" />
          </a>
        </div>
        <div className="projects">
          <a href="https://www.example.com">
            {" "}
            <img src={img2} alt="My Project" />
          </a>
        </div>
        <div className="projects">
          <a href="https://www.example.com">
            {" "}
            <img src={img3} alt="My Project" />
          </a>
        </div>
      </div>
    </div>
  );
}
