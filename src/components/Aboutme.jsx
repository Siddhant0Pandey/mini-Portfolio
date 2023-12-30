import { useState } from "react";

export default function Aboutme() {
  const [isKnowMore, setIsKnowMore] = useState(false);

  function toggleKnowMore() {
    setIsKnowMore(!isKnowMore);
  }

  return (
    <header className="aboutme_section">
      <p>&lt; About Me &gt;</p>
      <h1>
        Hi, I am <span className="name">Siddhant Pandey.</span>
        <br />I <span className="build"> build </span> and
        <span className="design"> design </span> the website.
      </h1>
      <button className="know_more" onClick={toggleKnowMore}>
        Know more......
      </button>

      <div className={`h5-container ${isKnowMore ? "visible" : ""}`}>
        <h5 className="moreaboutme">
          &quot;Hello, I&apos;m Siddhant Pandey, a web developer with a passion
          for creating user-friendly websites that deliver exceptional user
          experiences. With a years of experience in front-end development,
          I&apos;ve had the opportunity to work on projects that blend form and
          function seamlessly. My goal is to continue pushing the boundaries of
          web design and development, crafting digital solutions that leave a
          lasting impression&quot;.
        </h5>
      </div>
    </header>
  );
}
