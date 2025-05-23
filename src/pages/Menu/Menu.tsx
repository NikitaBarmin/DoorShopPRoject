import Headling from '../../components/Headling/Headling';
import styles from './Menu.module.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import { PREFIX } from '../../helpers/MOCK_API';
import type { Door } from '../../interfaces/door.interface';
import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';

function Menu() {
	const [products, setProducts] = useState<Door[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();

	const getDoors = async () => {
		try {
			setIsLoading(true);
			await new Promise<void>((resolve) => {
				setTimeout(() => {
					resolve();
				}, 100);
			});
			const { data } = await axios.get<Door[]>(`${PREFIX}/doors`);
			setProducts(data);
			setIsLoading(false);
		} catch (e) {
			if (e instanceof AxiosError) {
				setError(e.message);
			}
			setIsLoading(false);
			console.log(e);
		}

		/* try {
			const res = await fetch(`${PREFIX}/doors`);
			if (!res.ok) {
				return;
			}
			const data = await res.json() as Door[];
			setProducts(data);
		} catch (e) {
			console.log(e);
		} */
	};

	useEffect(() => {
		getDoors();
	}, []);
	return (
		<div className={styles['menu__wrapper']}>
			<div className={styles['head']}>
				<Headling>Подборка дверей</Headling>
			</div>
			<div className={styles['cards']}>
				{error && <>{error}</>}
				{!isLoading && products.map((product) => (
					<ProductCard
						key={product.id}
						id={product.id}
						name={product.name}
						price={product.price}
						image={product.image}
						rating={product.rating}

					/>
				))}
				{isLoading && <>ЗАГРУЗКА ДВЕРЕЙ...</>}
			</div>
		</div>

	);
}
export default Menu;