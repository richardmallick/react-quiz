import image from '../../assets/images/login.svg';
import Illustration from "../Illustration";
import classes from "../../styles/Login.module.css";
import Form from "../Form";
import TextInput from "../TextInput";
import Button from "../Button";

export default function Login() {
	return(
		<>
			<h1>Login to your account</h1>
			<div className="column">
				<Illustration image={image} alt="Login"/>
				<Form className={`${classes.login}`}>
					<TextInput type='text' placeholder="Enter email" icon="alternate_email" />
					<TextInput type='password' placeholder="Enter password" icon="lock" />
					<Button>
						Submit now	
					</Button>
					<div className="info">Don't have an account? <a href="signup.html">Signup</a> instead.</div>
				</Form>
				
			</div>
		</>
	)
}