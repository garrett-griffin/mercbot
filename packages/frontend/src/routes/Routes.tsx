import { Navigate, Route, RouteProps, Routes } from 'react-router-dom'
import { allProtectedRoutes, allAuthRoutes, allPublicRoutes } from './index'
import Layout from '@/layout/Layout'
import { useAuthContext } from '@/context'
import DefaultLayout from '@/layout/DefaultLayout'

const AllRoutes = (props: RouteProps) => {
	const { isAuthenticated } = useAuthContext()
	return (
		<Routes>
			{allAuthRoutes.map((route, idx) => (
				<Route
					key={idx}
					path={route.path}
					element={<DefaultLayout {...props}>{route.element}</DefaultLayout>}
				/>
			))}

			{allPublicRoutes.map((route, idx) => (
				<Route
					key={idx}
					path={route.path}
					element={
						<Layout {...props}>{route.element}</Layout>
					}
				/>
			))}

			{allProtectedRoutes.map((route, idx) => (
				<Route
					key={idx}
					path={route.path}
					element={
						!isAuthenticated ? (
							<Navigate
								to={{
									pathname: '/auth/login',
									search: 'next=' + route.path,
								}}
							/>
						) : (
							<Layout {...props}>{route.element}</Layout>
						)
					}
				/>
			))}
		</Routes>
	)
}

export default AllRoutes
