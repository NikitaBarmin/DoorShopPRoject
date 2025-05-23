import { useDispatch } from 'react-redux';
import styles from './ProductCard.module.css';
/* import type { FC } from 'react'; */
import type { ProductCardProps } from './ProductCard.props';
import { Link } from 'react-router-dom';
import { cartActions } from '../../store/cart.slice';
import { type AppDispath } from '../../store/store';
import { type MouseEvent } from 'react';


/* const Button2 : FC<ButtonProps> = ({children, className, ...props}) => {
    return <><button {...props} className= {classNames(styles['button accent'], className)}>{children}</button> </>
} */

function ProductCard(props: ProductCardProps) {
	const dispatch = useDispatch<AppDispath>();
	const addToCart = (e: MouseEvent) => {
		e.preventDefault();	
		dispatch(cartActions.add(props.id));
	};
	return (
		<Link to = {`/doors/${props.id}`} tabIndex={0} aria-label={`Подробнее о двери ${props.name}`}>
			<div className= {styles['full-card']}>
				<div className = {styles['card']}>
					<img className = {styles['card__img']} src= {props.image}  alt={`Межкомнатная дверь ${props.name}`} loading="lazy" />
					<div className={styles['card__rating']}>
						{props.rating}
						<img className = {styles['card-rating__img']}  src="/svg-icons/star-icon.svg" alt="Рейтинг двери" loading="lazy" />
					</div>
					<button className={styles['add-to-cart']} onClick = {addToCart} tabIndex={0} aria-label={`Добавить ${props.name} в корзину`}>
						<img src="/svg-icons/cart-button-icon.svg" alt="Добавить в корзину" loading="lazy" />
					</button>
				</div>
				<div className={styles['card__text']}>
        	    <div className={styles['card__title']}>{props.name}</div>
					<div className={styles['card__price']}> от {props.price} ₽</div>
				</div>
			</div>
		</Link>
	);
}
export default ProductCard;