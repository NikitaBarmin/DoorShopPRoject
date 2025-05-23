import styles from './Headling.module.css';
/* import type { FC } from 'react'; */
import classNames from 'classnames';
import type { HeadlingProps } from './Headling.props';
import React from 'react';


/* const Button2 : FC<ButtonProps> = ({children, className, ...props}) => {
	return <><button {...props} className= {classNames(styles['button accent'], className)}>{children}</button> </>
} */

/* function Headling({children, className, ...props}: HeadlingProps) {
	return ( 
		<h1 className={classNames(className, styles.header)} {...props}>{children}</h1>
	);

}
export default Headling; */
const HeadlingComponent: React.FC<HeadlingProps> = ({ children, className, ...props }) => {
	return (
		<h1 className={classNames(className, styles.header)} {...props}>
			{children}
		</h1>
	);
};

const Headling = React.memo(HeadlingComponent);

export default Headling;
