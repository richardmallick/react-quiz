import Nav from "./Nav";
import classess from "../styles/Layout.module.css";

export default function Layout({children}) {
	return(
		<>
			<Nav/>
			<main className={classess.main}>
				<div className={classess.container}>
					{children}
				</div>
			</main>
		</>
	)
}