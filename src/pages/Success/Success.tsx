import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './Success.module.css';

function Success() {
	const navigate = useNavigate();
	return (
		<div className={styles['success']}>
			<div className={styles['text']}>Ваш заказ успешно сформирован!</div>
			<div className={styles['text']}>В ближайшее время наши менеджеры свяжутся с вами.</div>
			<Button appearance="big" onClick={() => navigate('/doors')}>Сделать новый</Button>
		</div>
	);
}
export default Success;






