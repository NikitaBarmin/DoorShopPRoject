import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user.slice';
import { cartReducer } from './cart.slice';
import { saveState } from './storage';
import { JWT_PERSISTENT_STATE } from './user.slice';
import { CART_PERSISTENT_STATE } from './cart.slice';
import { FEEDBACK_PERSISTENT_STATE } from './user.slice';

export const store = configureStore({
	reducer: {
		user: userReducer,
		cart: cartReducer
	}
});

store.subscribe(() => {
	saveState({ jwt: store.getState().user.jwt }, JWT_PERSISTENT_STATE);
	saveState({ feedback: store.getState().user.feedback }, FEEDBACK_PERSISTENT_STATE);
	saveState( store.getState().cart, CART_PERSISTENT_STATE);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;