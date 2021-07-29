import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {
  return (
    <header>
      <Link className="homepage-link" to="/">
      &#9679; juliennecodes
      </Link>
    </header>
  );
}
