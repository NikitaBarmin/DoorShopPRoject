import { useLoaderData, useNavigate } from 'react-router-dom';
import type { Door } from '../../interfaces/door.interface';
import styles from './DoorCard.module.css';

function DoorCard() {
	const door = useLoaderData() as Door;
	const navigate = useNavigate();

	return (
		<div className={styles['doorcard-wrapper']}>
			<button onClick={() => navigate('/doors')} className={styles['backwardButton']}>
				<img src="/svg-icons/backward-img.svg" alt="Назад" loading="lazy" />
			</button>
			<div className={styles['doorcard-content']}>
				<img  src= {door.image}  alt="Межкомнатная дверь" loading="lazy" />
				<div className={styles['doorcard-text']}>
					<p className={styles['doorcard-name']}>{door.name}</p>
					<p className={styles['doorcard-description']}>{door.description}</p>
				</div>
			</div>			
		</div>		
	);
}
export default DoorCard;
