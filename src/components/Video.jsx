import image from '../assets/images/3.jpg';
import classess from '../styles/Video.module.css';

export default function Video() {
  return (
    <a href="quiz.html">
      <div className={classess.video}>
        <img src={image} alt="" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        <div className={classess.qmeta}>
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
    </a>
  );
}
