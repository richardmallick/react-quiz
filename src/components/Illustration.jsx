import classes from '../styles/Illustration.module.css';

export default function Illustration({image, ...rest}) {
	return(
		<>
			<div className={classes.illustration}>
            	<img src={image} {...rest} />
          	</div>
		</>
	)
}