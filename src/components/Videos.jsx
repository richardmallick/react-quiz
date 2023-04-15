import classess from '../styles/Videos.module.css';
import Video from './Video';

export default function Videos() {
	return(
		<div className={classess.videos}>
			<Video/>
			<Video/>
			<Video/>
			<Video/>
			<Video/>
			<Video/>
			<Video/>
		</div>
	)
}