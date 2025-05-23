import { useSelector } from 'react-redux';
import Headling from '../../components/Headling/Headling';
import CartItem from '../../components/CartItem/CartItem';
import { useEffect, useState } from 'react';
import { type Door } from '../../interfaces/door.interface';
import { type RootState } from '../../store/store';
import axios from 'axios';
import { API } from '../../helpers/API';
import { PREFIX } from '../../helpers/MOCK_API';
import styles from './Cart.module.css';
import classNames from 'classnames';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { type AppDispath } from '../../store/store';
import { cartActions } from '../../store/cart.slice';

const DELIVERY = 1690;
function Cart() {
	const [cartProducts, setCardProducts] = useState<Door[]>([]);
	const items = useSelector((s: RootState) => s.cart.items);
	const jwt = useSelector((s: RootState) => s.user.jwt);
	const dispatch = useDispatch<AppDispath>();
	const navigate = useNavigate();

	const total = items.map(i => {
		const product = cartProducts.find(p => p.id === i.id);
		if (!product) {
			return 0;
		}
		return i.count * product.price;
	}).reduce((acc, i) => acc+=i, 0);


	const getItem = async (id: number) => {
		const {data} = await axios.get<Door[]>(`${PREFIX}/doors`);
		const door = data.find((d) => d.id === id);
		return door;
	};

	const loadAllItems = async () => {
		const res = await Promise.all(items.map(i => getItem(i.id)));
		setCardProducts(res.filter((item): item is Door => item !== undefined));
	};

	const checkout = async () => {
		await axios.post(`${API}/order`, {
			products: items
		}, {
			headers: {
				Authorization: `Bearer ${jwt}`
			}
		});
		dispatch(cartActions.clean());
		navigate('/success');
	};



	useEffect(() => {
		loadAllItems();
	}, [items]);

	return  (
		<div className={styles.cart}>
			<div className={styles['cart__wrapper']}>
				<Headling className= {classNames(styles['cart__header'],styles['headling'])}>Корзина</Headling>
				<div className={styles.carts}>
					{items.map(i => {
						const product = cartProducts.find(p => p.id === i.id);
						if (!product) {
							return;
						}
						return <CartItem key={product.id} count={i.count} {...product} />;
					})}
				</div>
				 {items.length > 0 && <div>
					<div className={styles['line']}>
						<div className={styles['text']}>Итог</div>
						<div className={styles['price']}>{total}&nbsp;<span>₽</span></div>
					</div>
					<hr className={styles['hr']} />
					<div className={styles['line']}>
						<div className={styles['text']}>Доставка</div>
						<div className={styles['price']}>{DELIVERY}&nbsp;<span>₽</span></div>
					</div>
					<hr className={styles['hr']} />
					<div className={styles['line']}>
						<div className={styles['text']}>Итог <span className={styles['total-count']}>({items.length})</span></div>
						<div className={styles['price']}>{total + DELIVERY}&nbsp;<span>₽</span></div>
					</div>
					<div className={styles['checkout']}>
						<Button appearance="big" onClick = {checkout}>оформить</Button>
					</div>			
				</div>}
				{items.length === 0 && <p>Нет товаров</p>}
			</div>
			
		</div>
	);
	
}
export default Cart;