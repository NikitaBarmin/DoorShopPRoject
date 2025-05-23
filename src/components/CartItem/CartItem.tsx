import styles from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { type AppDispath } from '../../store/store';
import { type CartItemProps } from './CartItem.props';
import { cartActions } from '../../store/cart.slice';

function CartItem(props: CartItemProps) {
	const dispatch = useDispatch<AppDispath>();

	const increase = () => {
		dispatch(cartActions.add(props.id));
	};

	const descrease = () => {
		dispatch(cartActions.remove(props.id));
	};

	const remove = () => {
		dispatch(cartActions.delete(props.id));
	};
	
	return (
		<div className={styles['item']}>
			<div className={styles['left-part']}>
				<div className={styles['image']} style={{ backgroundImage: `url('${props.image}')` }}></div>
				<div className={styles['description']}>
					<div className={styles['name']}>{props.name}</div>
					<div className={styles['price']}>{props.price}&nbsp;₽</div>
				</div>
			</div>		
			<div className={styles['actions']}>
				<button className={styles['minus']} onClick={descrease} tabIndex={0} aria-label="Уменьшить количество">
					<img src="/svg-icons/minus-icon.svg" alt="Уменьшить количество товара" />
				</button>
				<div className={styles['number']}>{props.count}</div>
				<button className={styles['plus']} onClick={increase} tabIndex={0} aria-label="Увеличить количество">
					<img src="/svg-icons/plus-icon.svg" alt="Увеличить количество товара" />
				</button>
				<button className={styles['remove']} onClick={remove} tabIndex={0} aria-label="Удалить товар из корзины">
					<img src="/svg-icons/delete-icon.svg" alt="Удалить товар из корзины" />
				</button>
			</div>
		</div>
	);
}

export default CartItem;