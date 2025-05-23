import { Outlet } from 'react-router-dom';
import styles from './Auth.module.css';
/* import classNames from 'classnames'; */

function Layout() {
	return (
		<>
			<div className={styles['auth-layout']}>
				<div className={styles['auth-layout__wrapper']}>
					<Outlet/>
				</div>
			</div>

		</>
		
	);
}

export default Layout;