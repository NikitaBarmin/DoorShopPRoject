import styles from './ContactButton.module.css';
import { useState } from 'react';
import classNames from 'classnames';

function ContactButton() {
	const [showContacts, setShowContacts] = useState(false);
	return (
		<div className={styles.container}>
			<button className={classNames(styles.contacts, {[styles['activate']]: location.pathname === '/doors'})} onClick={() => setShowContacts(!showContacts)} tabIndex={0} aria-label="Открыть контакты">
            Контакты
				<div className= {classNames(styles.modal, {
					[styles['open']]: showContacts
			    })}> 
					<div className={styles.modalContent}>
						<div className={styles.socialIcons}>
							<a href="https://vk.com/noeticaa" target="_blank" rel="noreferrer" tabIndex={0} aria-label="VK">
								<img src="/svg-icons/vk.svg" alt="VK" />
							</a>
							<a href="https://instagram.com" target="_blank" rel="noreferrer" tabIndex={0} aria-label="Instagram">
								<img src="/svg-icons/instagram.svg" alt="Instagram" />
							</a>
							<a href="https://www.youtube.com/@НикитаБармин-и8п" target="_blank" rel="noreferrer" tabIndex={0} aria-label="YouTube">
								<img src="/svg-icons/youtube.svg" alt="YouTube" />
							</a>
							<a href="https://t.me/Burbalbed" target="_blank" rel="noreferrer" tabIndex={0} aria-label="Telegram">
								<img src="/svg-icons/telegramlogo.svg" alt="Telegram" />
							</a>
						</div>
					</div>
				</div>
			</button> 
			
		</div> 
		
	);

}
export default ContactButton;

