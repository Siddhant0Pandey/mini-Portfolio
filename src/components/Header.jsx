import Aboutme from "./Aboutme";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="header" id="Home">
      <Navbar />
      <Aboutme />
    </header>
  );
}
