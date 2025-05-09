function Button({children, handleClick}){
	return <button type='button' onClick={handleClick} className='button'>{children}</button>;
}

export default Button;
