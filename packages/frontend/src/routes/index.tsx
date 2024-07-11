/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react'
import { Navigate, RouteProps } from 'react-router-dom'

//No Login Required
const Home = lazy(() => import('@/pages/apps/Home'))

//Auth
const Login = lazy(() => import('@/pages/authentication/Login'))
const Register = lazy(() => import('@/pages/authentication/Register'))
const RecoverPW = lazy(() => import('@/pages/authentication/RecoverPW'))
const Lockscreen = lazy(() => import('@/pages/authentication/LockScreen'))

//Errors
const Error404 = lazy(() => import('@/pages/authentication/Error404'))
const Error500 = lazy(() => import('@/pages/authentication/Error500'))

//Profile
const Profile = lazy(() => import('@/pages/pages/Profile'))


export type RoutesProps = {
	path: RouteProps['path']
	name: string
	element: RouteProps['element']
}

const publicRoutes: RoutesProps[] = [
	{
		path: '/',
		name: 'Home Page',
		element: <Navigate to="/home" />,
	},
	{
		path: '/home',
		name: 'Home',
		element: <Home />,
	}
]

const authRoutes: RoutesProps[] = [
	{
		path: '/auth/login',
		name: 'Login',
		element: <Login />,
	},
	{
		path: '/auth/register',
		name: 'Register',
		element: <Register />,
	},
	{
		path: '/auth/recover-pw',
		name: 'Recover PW',
		element: <RecoverPW />,
	},
	{
		path: '/auth/lock-screen',
		name: 'Lockscreen',
		element: <Lockscreen />,
	},
]

const errorRoutes: RoutesProps[] = [
	{
		path: '/auth/auth-404',
		name: '404 Error',
		element: <Error404 />,
	},
	{
		path: '/auth/auth-500',
		name: '500 Error',
		element: <Error500 />,
	},
	{
		path: '*',
		name: '404 Error',
		element: <Error404 />,
	},
]

const pagesRoutes: RoutesProps[] = [
	{
		path: '/pages/profile',
		name: 'Profile',
		element: <Profile />,
	},
]

const allProtectedRoutes = [
	...pagesRoutes,
]

const allAuthRoutes = [
	...authRoutes
]

const allPublicRoutes = [
	...publicRoutes,
	...errorRoutes
];

export { allProtectedRoutes, allAuthRoutes, allPublicRoutes }
