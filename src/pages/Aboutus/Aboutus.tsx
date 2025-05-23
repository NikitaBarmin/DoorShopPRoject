import Headling from '../../components/Headling/Headling';
import YandexMap from '../../components/YandexMap/YandexMap';
import { useMemo } from 'react';
import styles from './Aboutus.module.css';
import { NavLink } from 'react-router-dom';
import Feedback from '../../components/Feedback/Feedback';
import Button from '../../components/Button/Button';
import classNames from 'classnames';
import TrustCard from '../../components/TrustCard/TrustCard';

/*Ф */

function Aboutus() {
	const center = useMemo(() => [56.22781, 43.380813] as [number, number], []);
	const zoom = useMemo(() => 16, []);
	return (

		<div className={styles.aboutus}>
			<div className={styles.sections}></div>
			<section className={styles['hero']}>
				<div className={styles['hero__wrapper']}>
					<div className={styles['aboutus_firstBlock']}>
						<Headling className={styles['header-margin']}>Межкомнатные двери от Бармина</Headling>
						<p className={styles['aboutus-text']}>Barmin — динамично развивающаяся компания, которая с момента основания в 2025 году стремится задавать новые стандарты в своей отрасли. Мы сочетаем передовые технологии, продуманные решения и клиентоориентированный подход, чтобы предлагать рынку только лучшее.</p>
					</div>
					<div className={styles['aboutus_secondBlock']}>
						<img src="/aboutUs-secondBlock.jpg" alt="Серая межкомнатная дверь" />
					</div>
					<div className={styles['aboutus_thirdBlock']}>
						<img src="/aboutUs-thirdBlock.jpg" alt="Бежевая межкомнатная дверь" />
						<p className={styles['aboutus-text']}>Это современное производство премиальных дверей в России, где передовые технологии встречаются с бескомпромиссным качеством. Благодаря собственному производству в России мы предлагаем двери в 2 раза выгоднее европейских аналогов, без ущерба для качества.</p>
					</div>
				</div>
			</section>
			<section className={styles['section-map']}>
				<div className={styles['section-map__wrapper']}>
					<Headling className={styles['header-margin']}>Район на карте</Headling>
					<div className={styles['section-map__info']}>
						<YandexMap center={center} zoom={zoom} />
						<p className={styles['section-text']}>Door Shop – это не просто онлайн-магазин! Загляните в наш уютный мебельный салон, где вы сможете вживую оценить безупречное качество, прикоснуться к изысканным материалам и ощутить неповторимую атмосферу комфорта. Наши опытные консультанты помогут вам создать идеальное пространство, воплотив ваши мечты в реальность. Добро пожаловать в мир вдохновения и совершенства!</p>
					</div>
				</div>
			</section>
			<section className={styles.cta}>
				<div className={styles['cta__wrapper']}>
					<Headling className={styles['header-margin']}>Не уверены в выборе? Наши эксперты помогут!</Headling>
					<div className={styles['cta__main']}>
						<p className={styles['cta__paragrath']}>
							Мы подберем двери, идеально соответствующие вашим предпочтениям и бюджету, предлагая огромный выбор моделей – от элегантной классики до современных минималистичных решений. Получите бесплатную консультацию, чтобы узнать, какие двери станут идеальным дополнением вашего дома!
						</p>
						<div className={styles['cta__buttons']}>
							<Feedback className={styles['feedback-button']} />
							<NavLink to='/doors' className={({ isActive }) => classNames(styles['link'], {
								[styles['activate']]: isActive
							})}>
								<Button appearance='small' className={styles['exit']}>
									Смотреть каталог
								</Button>
							</NavLink>
						</div>
					</div>
				</div>
			</section>
			<section className={styles.video}>
				<div className={styles['video__wrapper']}>
					<a data-youtubelightbox className={styles['video__link']} href="https://www.youtube.com/watch?v=kWICdgsWgLU" target="_blank" rel="noreferrer">
						<img className={styles['video__bg']} src="/public/video-img.png" alt="Видеофон" />
						<img className={styles['video__button']} src="/public/play-button.svg" alt="Кнопка" />
					</a>
				</div>
			</section>
			<section className={styles['trust-card']}>
				<div className={styles['trust-card__wrapper']}>
					<Headling className={styles['header-margin']}>Нам доверяют</Headling>
					<div className={styles['trust-cards__display']}> {/* или что-то вроде этого */}
						<TrustCard number="Более 500" description="моделей на складе" />
						<TrustCard number="10 лет" description="работаем с проверенными поставщиками" />
						<TrustCard number="95%" description="положительных отзывов от клиентов" />
					</div>
				</div>
			</section>
			<footer className={styles.footer}>
				<div className={styles['footer__wrapper']}>
					<img src="/public/logo.svg" alt="" />
					<div className={styles['footer-elements']}>
						<NavLink to='/' className={({ isActive }) => classNames(styles['link'], {
							[styles['activate']]: isActive
						})}>О компании</NavLink>
						<NavLink to='/doors' className={({ isActive }) => classNames(styles['link'], {
							[styles['activate']]: isActive
						})}>Подборка дверей</NavLink>
						<Feedback />
					</div>
					<div className={styles['footer__img']}>
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
					<div className={styles['footer__adress']}>
						<p>Адрес: <a className={styles['footer__info']}>пр-т Циолковского 94а</a></p>
						<p>Телефон: <a className={styles['footer__info']}>8 (930) 693-24-47</a></p>
						<p>Отдел продаж: 10:00 - 20:00</p>
						<p>E-mail: <a className={styles['footer__info']}>barminnikita22077@mail.ru</a></p>
					</div>
				</div>
			</footer>
		</div>
	);
}
export default Aboutus;