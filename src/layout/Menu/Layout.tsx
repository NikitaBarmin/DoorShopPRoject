import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import styles from './Layout.module.css';
import ContactButton from '../../components/ContactButton/ContactButton';
import Feedback from '../../components/Feedback/Feedback';
import Button from '../../components/Button/Button';
import ProfileButton from '../../components/ProfileButton/ProfileButton';
import MobileNav from '../../components/MobileNav/MobileNav';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../store/user.slice';
import type { AppDispath } from '../../store/store';
import { type RootState } from '../../store/store';
import { useState } from 'react';


function Layout() {

	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispath>();
	const items = useSelector((s: RootState) => s.cart.items);
	const [isActive, setIsActive] = useState<boolean>(false);
	const toggleMenu = () => {
		setIsActive(!isActive);
	};
	const logout = () => {
		dispatch(userActions.logout());
		navigate('/auth/login');
	};

	return (
		<div className={classNames(styles['layout'], {
			[styles['layout-mobile']]: isActive
		})}>
			{isActive && <MobileNav isActive={isActive} onClose={toggleMenu} />}
			<header className={styles['header']}>
				<div className={styles['header__wrapper']}>
					<div className={styles['navbar']}>
						<div className={styles['logo']}>
							<img className={styles['logo-img']} src="/logo.svg" alt="" />
							<div className={styles['experienseAndGaranty']}>
								<div>
									<img src="/icons8-гарантия-50.png" alt="" />
									<span className={styles['garanty-text']}>Опыт 20 лет</span>
								</div>
								<div>
									<img src="/icons8-experience-skill-50.png" alt="" />
									<span className={styles['experiense-text']}>3 года гарантии</span>
								</div>
							</div>
						</div>
						<div className={styles['navbar-elements']}>
							<NavLink to='/' className={({ isActive }) => classNames(styles['link'], {
								[styles['activate']]: isActive
							})}>О компании</NavLink>
							<NavLink to='/doors' className={({ isActive }) => classNames(styles['link'], {
								[styles['activate']]: isActive
							})}>Подборка дверей</NavLink>
							<NavLink to='/cart' className={({ isActive }) => classNames(styles['cart-count_container'], styles['link'], {
								[styles['activate']]: isActive
							})}>
								Корзина <div className={styles['cart-count']}>{items.reduce((acc, item) => acc += item.count, 0)}</div>
							</NavLink>
							<ContactButton />
							<Feedback />
							<ProfileButton />
							<Button appearance='small' className={styles['exit']} onClick={logout}>
								<img src="/public/exit-icon.png" alt="" />
								Выход
							</Button>
						</div>
					</div>
					<div className={styles['header__nav-btn']}>
						<button onClick={toggleMenu} className={styles['nav-icon-btn']}>
							<div className={classNames(styles['nav-icon'], {
								[styles['nav-icon--active']]: isActive
							})}></div>
						</button>
					</div>
				</div>
			</header>
			<div className={styles['content']}>
				<div className={styles['content__wrapper']}>
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default Layout;