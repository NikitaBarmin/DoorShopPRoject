import Headling from '../../components/Headling/Headling';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import styles from '../Login/Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import type { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispath } from '../../store/store';
import { registration, userActions } from '../../store/user.slice';
import type { RootState } from '../../store/store';



export type RegistrationForm = {
	email: {
		value: string
	};
	password: {
		value: string
	};
	name: {
		value: string
	}
}

function Login() {


	/* 	const [error, setError] = useState<string | null>(null); */
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispath>();
	const { jwt, registrationErrorMessage } = useSelector((s: RootState) => s.user);

	useEffect(() => {
		if (jwt) {
			navigate('/');
		}
	}, [jwt, navigate]); // когда запрос post вне редакса, навигации происходила там. при запросе в редаксе, навигация происходит при изменении в jwt (jwt селектором достаем из стора)


	const submit = async (e: FormEvent) => {
		e.preventDefault();
		dispatch(userActions.clearRegistrationError());
		const target = e.target as typeof e.target & RegistrationForm;
		const {email, password, name} = target;
		await sendRegistration(email.value, password.value, name.value);
	};

	const sendRegistration = async (email: string, password: string, name: string) => {
		dispatch(registration({email, password, name})); // отправляем логин
		/* try {
			const { data } = await axios.post(`${API}/auth/login`,  {
				email,
				password
			});
			dispatch(userActions.addJWT(data.access_token));
			navigate('/');
		} catch (e) {
			if (e instanceof AxiosError) {
				setError(e.message);
			}
		} */
	};
	return (
		<div className={styles['login']}>
			{registrationErrorMessage && <div className={styles.error}>{registrationErrorMessage}</div>}
			<Headling>Регистрация</Headling>
			<form className={styles['form']} onSubmit={submit} >
				<div className={styles['field']}>
					<label htmlFor="email">Ваш email</label>
					<Input id="email" name='email' placeholder='Email' />
				</div>
				<div className={styles['field']}>
					<label htmlFor="name">Ваше имя</label>
					<Input id="name" name='name' placeholder='Имя' />
				</div>
				<div className={styles['field']}>
					<label htmlFor="password">Ваш пароль</label>
					<Input id="password" name='password' type="password" placeholder='Пароль' />
				</div>
				
				<Button appearance="big">Зарегистрироваться</Button>
			</form>
			<div className={styles['links']}>
				<div>Есть аккаунт?</div>
				<Link to="/auth/login">Войти</Link>
			</div>
	    </div>		
	);
}
export default Login;