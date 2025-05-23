import styles from './ContactButton.module.css';
import { useState } from 'react';
import classNames from 'classnames';

function ContactButton() {
	const [showContacts, setShowContacts] = useState(false);
	return (
		<div className={styles.container}>
			<button className={classNames(styles.contacts, {[styles['activate']]: location.pathname === '/doors'})} onClick={() => setShowContacts(!showContacts)}>
            Контакты
				<div className= {classNames(styles.modal, {
					[styles['open']]: showContacts
			    })}> 
					<div className={styles.modalContent}>
						<div className={styles.socialIcons}>
							<a href="https://vk.com/noeticaa" target="_blank" rel="noreferrer">
								<img src="/public/vk.svg" alt="" />
							</a>
							<a href="https://instagram.com" target="_blank" rel="noreferrer">
								<img src="/public/instagram.svg" alt="" />
							</a>
							<a href="https://www.youtube.com/@НикитаБармин-и8п" target="_blank" rel="noreferrer">
								<img src="/public/youtube.svg" alt="" />
							</a>
							<a href="https://t.me/Burbalbed" target="_blank" rel="noreferrer">
								<img src="/public/facebook-logo.svg" alt="" />
							</a>
						</div>
					</div>
				</div>
			</button> 
			
		</div> 
		
	);

}
export default ContactButton;

