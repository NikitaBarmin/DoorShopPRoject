import styles from './Button.module.css';
/* import type { FC } from 'react'; */
import classNames from 'classnames';
import type { ButtonProps } from './Button.props';


/* const Button2 : FC<ButtonProps> = ({children, className, ...props}) => {
	return <><button {...props} className= {classNames(styles['button accent'], className)}>{children}</button> </>
} */

function Button({children, className, appearance = 'small', ...props}: ButtonProps) {
	return ( 
		<button {...props} className= {classNames(styles['button'],styles['accent'], className, {
			[styles['small']]: appearance === 'small',
			[styles['big']]: appearance === 'big'
		})}>
			{children}
		</button> 
	);

}
export default Button;
