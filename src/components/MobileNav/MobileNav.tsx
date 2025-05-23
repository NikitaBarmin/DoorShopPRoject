import { NavLink, useLocation } from 'react-router-dom';
import Feedback from '../Feedback/Feedback';
import styles from './MobileNav.module.css';
import classNames from 'classnames';
import type { MobileNavProps } from './MobileNav.props';
import ContactButton from '../ContactButton/ContactButton';
import { userActions } from '../../store/user.slice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { type AppDispath } from '../../store/store';
import { type RootState } from '../../store/store';
import Button from '../Button/Button';

function MobileNav({ onClose }: MobileNavProps) { // Убрали указание типа возвращаемого значения
	const location = useLocation();
	const navigate = useNavigate();
	const items = useSelector((s: RootState) => s.cart.items);
	const dispatch = useDispatch<AppDispath>();
	const logout = () => {
		dispatch(userActions.logout());
		navigate('/auth/login');
	};

	return (
		<div className={styles['mobile-menu']}>
			<div className={styles['mobile-menu__content']}>
				<NavLink
					to="/"
					className={classNames(styles['link'], { [styles['activate']]: location.pathname === '/' })}
					onClick={onClose}
				>
					О компании
				</NavLink>
				<NavLink
					to="/doors"
					className={classNames(styles['link'], { [styles['activate']]: location.pathname === '/doors' })}
					onClick={onClose}
				>
					Подборка дверей
				</NavLink>
				<NavLink to='/cart' className={({ isActive }) => classNames(styles['cart-count_container'], styles['link'], {
					[styles['activate']]: isActive
				})}>
					Корзина <div className={styles['cart-count']}>{items.reduce((acc, item) => acc += item.count, 0)}</div>
				</NavLink>
				<Feedback />
				<ContactButton />
				<Button appearance='small' className={styles['exit']} onClick={logout}>
					<img src="/public/exit-icon.svg" alt="" />
					Выход
				</Button>
			</div>
		</div>
	);
}

export default MobileNav;
