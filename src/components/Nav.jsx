import Account from "./Account";
import classess from "../styles/Nav.module.css";
import logo from "../assets/images/logo-bg.png";
export default function Nav() {
	return(
		<nav className={classess.nav}>
			<ul>
				<li>
				<a href="index.html" className={classess.brand}>
					<img src={logo} alt="Learn with Sumit Logo" />
					<h3>Learn with Sumit</h3>
				</a>
				</li>
			</ul>
			<Account/>
		</nav>
	);
}