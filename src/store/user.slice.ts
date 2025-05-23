import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loadState } from './storage';
import axios, { AxiosError } from 'axios';
import { API } from '../helpers/API';
import type { LoginResponse } from '../interfaces/auth.interface';
import { type Profile } from '../interfaces/user.interface';
import { type RootState } from './store';

export const JWT_PERSISTENT_STATE = 'userData';
export const FEEDBACK_PERSISTENT_STATE = 'feedback';

export interface UserPersistentState {
	jwt: string | null;
	feedback: [];
} //  Это интерфейс, описывающий структуру данных, которые мы будем сохранять в localStorage

export interface UserState {
	jwt: string | null;
	feedback: [];
	loginErrorMessage?: string;
	registrationErrorMessage?: string;
	profile?: Profile	
}

const initialState: UserState = {
	jwt: loadState<UserPersistentState>(JWT_PERSISTENT_STATE)?.jwt ?? null,
	feedback: loadState<UserPersistentState>(FEEDBACK_PERSISTENT_STATE)?.feedback ?? []
};

export const login = createAsyncThunk('user/login', 
	async (params: {email: string, password: string}) => {
		try {
			const { data } = await axios.post<LoginResponse>(`${API}/auth/login`,  {
				email: params.email,
				password: params.password
			});
			return data;
		} catch (e) {
			if (e instanceof AxiosError) {
				throw new Error(e.response?.data.message);
			}
		}
		
	}
); // возвращает промис в состоянии фулфилд либо реджект и данные, эти состояния мы должны также обработать

export const registration = createAsyncThunk('user/registration', 
	async (params: {email: string, password: string, name: string}) => {
		try {
			const { data } = await axios.post<LoginResponse>(`${API}/auth/register`,  {
				email: params.email,
				password: params.password,
				name: params.name
			});
			return data;
		} catch (e) {
			if (e instanceof AxiosError) {
				throw new Error(e.response?.data.message);
			}
		}		
	}
);


export const getProfile = createAsyncThunk<Profile, void, { state: RootState }>('user/getProfile',
	async (_, thunkApi) => {
		const jwt = thunkApi.getState().user.jwt;
		const { data } = await axios.get<Profile>(`${API}/user/profile`, {
			headers: {
				Authorization: `Bearer ${jwt}`
			}
		});
		return data;
	}
);



export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		/* addJWT: (state, action: PayloadAction<string>) => {
			state.jwt = action.payload
			;
		}, */
		logout: (state) => {
			state.jwt = null;
		},
		clearLoginError: (state) => {
			state.loginErrorMessage = undefined;
		},
		clearRegistrationError: (state) => {
			state.registrationErrorMessage = undefined;
		},
		addFeedback: (state, action) => {
			state.feedback = action.payload;
		}          
	},
	extraReducers: (builder) => {
		builder.addCase(login.fulfilled, (state, action) => {
			if (!action.payload) {
				return;
			}
			state.jwt = action.payload.access_token;
		});
		builder.addCase(login.rejected, (state, action) => {
			state.loginErrorMessage = action.error.message;
		});
		builder.addCase(registration.fulfilled, (state, action) => {
			if (!action.payload) {
				return;
			}
			state.jwt = action.payload.access_token;
		});
		builder.addCase(registration.rejected, (state, action) => {
			state.registrationErrorMessage = action.error.message;
		});
		builder.addCase(getProfile.fulfilled, (state, action) => {
			state.profile = action.payload;
		});
	}
});

export const userReducer =  userSlice.reducer;
export const userActions = userSlice.actions;