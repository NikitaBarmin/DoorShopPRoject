import type { TrustCardProps } from './TrustCard.props';
import styles from './TrustCard.module.css';

const TrustCard: React.FC<TrustCardProps> = ({ number, description }) => {
	return (
		<div className={styles.card}>
			<div className={styles['card__num']}>{number}</div>
			<div className={styles['card__desctiption']}>{description}</div>
		</div>
	);
};

export default TrustCard;