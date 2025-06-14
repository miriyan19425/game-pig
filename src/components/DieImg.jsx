import One from '../assets/dice-1.png';
import Two from '../assets/dice-2.png';
import Three from '../assets/dice-3.png';
import Four from '../assets/dice-4.png';
import Five from '../assets/dice-5.png';
import Six from '../assets/dice-6.png';
import styles from './DieImg.module.css';

const dieImages = [One, Two, Three, Four, Five, Six];

function DieImg({ diePoints }) {
  if (diePoints < 1 || diePoints > 6) return null; // Handle invalid diePoints
  return <img src={dieImages[diePoints - 1]} alt={`Die showing ${diePoints}`} className={styles.dieImage}/>;
}

export default DieImg;
