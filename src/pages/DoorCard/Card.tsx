import { useLoaderData, useNavigate } from 'react-router-dom';
import type { Door } from '../../interfaces/door.interface';
import styles from './DoorCard.module.css';

function DoorCard() {
	const door = useLoaderData() as Door;
	const navigate = useNavigate();
	
	console.log(door);
	return (
		<div className={styles['doorcard-wrapper']}>
			<button onClick={() => navigate('/doors')} className={styles['backwardButton']}>
				<img src="/backward-img.png" alt="" />
			</button>
			<div className={styles['doorcard-content']}>
				<img  src= {door.image}  alt=""/>
				<div className={styles['doorcard-text']}>
					<p className={styles['doorcard-name']}>{door.name}</p>
					<p className={styles['doorcard-description']}>{door.description}</p>
				</div>
			</div>			
		</div>		
	);
}
export default DoorCard;
