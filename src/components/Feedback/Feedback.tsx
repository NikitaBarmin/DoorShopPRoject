import classNames from 'classnames';
import styles from './Feedback.module.css';
import { useRef, useState, type FormEvent } from 'react';
import type { FeedbackProps } from './Feedback.props';
import Headling from '../Headling/Headling';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { userActions } from '../../store/user.slice';



function Feedback({className}: FeedbackProps) {
	const [showFeedbackWindow, setShowFeedbackWindow] = useState<boolean>(false);
 	const formRef = useRef<HTMLFormElement>(null);
	const dispatch = useDispatch();

	const addFeedback = (e: FormEvent) => {
		e.preventDefault();
		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);
		const formProps = Object.fromEntries(formData);
		dispatch(userActions.addFeedback({
			title: formProps.title,
			post: formProps.post
		}));
		if (formRef.current) {
			formRef.current.reset();
		}

	};
	return (
		<>
			<button 
				className={classNames(className, styles.contacts)}
				onClick={() => setShowFeedbackWindow(!showFeedbackWindow)}
			>
        Обратная связь
			</button>

			{showFeedbackWindow && (
				<div className={styles.modal}>
					<div className={styles.modalContent}>
						<Headling>Форма обратной связи</Headling>
						<form className= {styles['journal-form']}  onSubmit={addFeedback} ref = {formRef}>
							<Input placeholder='Укажите тему сообщения' type = 'text' name = 'title'  id = 'title' className={styles['feedback-input']}  />
							<textarea name="post" id="" cols = {20} rows={10} className = {styles.textarea}></textarea>
							<Button appearance='big' type = 'submit'>Отправить</Button>
						</form> 
						 <div className={styles.closeButton} onClick={() => setShowFeedbackWindow(!showFeedbackWindow)}>
              				×
						</div>
					</div>
				</div>
			)}
		</>
	);
};
		




export default Feedback;