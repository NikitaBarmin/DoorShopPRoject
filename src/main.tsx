import { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
/* import App from './App.tsx'; */
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout/Menu/Layout';
import Auth from './layout/Auth/Auth';
import Error from './pages/Error/Error';
import { PREFIX } from './helpers/MOCK_API';
import type { Door } from './interfaces/door.interface';
import axios from 'axios';
import Aboutus from './pages/Aboutus/Aboutus';
import Registration from './pages/Registration/Registration';
import Login from './pages/Login/Login';
import { RequireAuth } from './helpers/RequireAuth';
import { Provider } from 'react-redux';
import { store } from './store/store';
import DoorCard from './pages/DoorCard/Card';
import Cart from './pages/Cart/Cart';
import Success from './pages/Success/Success';



const Menu = lazy(() => import('./pages/Menu/Menu'));
const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/doors',
				element: <Suspense fallback={<></>}><Menu /></Suspense>
			},
			{
				path: '/doors/:id',
				element: <RequireAuth><DoorCard /></RequireAuth>,
				errorElement: <>Ошибка</>,
				loader: async ({ params }) => {
					const { data } = await axios.get<Door[]>(`${PREFIX}/doors`);
					const door = data.find((d) => d.id === Number(params.id));
					return door;
				}
			},
			{
				path: '/cart',
				element: <Cart />
			},
			{
				path: '/success',
				element: <Success />
			},
			{
				path: '*',
				element: <Error />
			},
			{
				path: '/',
				element: <Aboutus />
			}
		]
	},
	{
		path: '/auth',
		element: <Auth />,
		children: [
			{
				path: 'login',
				element: <Login />
			},
			{
				path: 'registration',
				element: <Registration />
			}
		]
	}

]);

createRoot(document.getElementById('root')!).render(
	<>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</>
);


