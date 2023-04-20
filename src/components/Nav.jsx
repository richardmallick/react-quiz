import Account from "./Account";
import classess from "../styles/Nav.module.css";
import logo from "../assets/images/logo-bg.png";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className={classess.nav}>
      <ul>
        <li>
          <Link to="/" className={classess.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
