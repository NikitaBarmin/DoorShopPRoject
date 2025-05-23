import styles from './ProfileButton.module.css';
import { useState } from 'react';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { type RootState } from '../../store/store';
import { useEffect } from 'react';
import { getProfile } from '../../store/user.slice';
import { type AppDispath } from '../../store/store';

function ProfileButton() {
	const [showProfile, setShowProfile] = useState(false);
	const dispatch = useDispatch<AppDispath>();
	const profile = useSelector((s: RootState) => s.user.profile);

	useEffect(() => {
		dispatch(getProfile());
	}, [dispatch]);

	return (
		<div className={styles.container}>
			<button className={classNames(styles.contacts, {[styles['activate']]: location.pathname === '/doors'})} onClick={() => setShowProfile(!showProfile)}>
				<img className={styles.profile} src = "/profile.svg" alt = 'Профиль'/>
				<div className= {classNames(styles.modal, {
					[styles['open']]: showProfile === true
			    })}> 
					<div className={styles.modalContent}>
						<div className={styles['profile-info']}>
							<p className={styles.name}>{profile?.name}</p>
							<p className={styles.email}>{profile?.email}</p>	
						</div>
					</div>
				</div>
				

			</button> 
			
		</div> 
		
	);

}
export default ProfileButton;