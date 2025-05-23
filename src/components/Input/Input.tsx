import { forwardRef } from 'react';
import styles from './Input.module.css';
import classNames from 'classnames';
import type { InputProps } from './Input.props';

const Input = forwardRef<HTMLInputElement, InputProps>(({isValid = true, className, ...props}, ref) => {
	return ( 
		<input {...props} ref = {ref} className = {classNames( className, styles.input, {
			[styles.invalid]: !isValid
		})}/>		
	);
});

export default Input;