import styles from './Button.module.css';

function Button({children, handleClick}){
	return <button className={styles.button} type='button' onClick={handleClick}>{children}</button>;
}

export default Button;
