import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home/Home'
import { ApartamentCatalog } from './pages/ApartamentCatalog/ApartamentCatalog'
import { NewsDetail } from './pages/NewsDetail/NewsDetail'
import { Сontacts } from './pages/Сontacts/Сontacts'
import { NotFound } from './pages/NotFound/NotFound'
import { News } from './pages/News/News'
import { AuthForm } from './pages/AuthForm/AuthForm'
import { RegistrationForm } from './pages/RegistrationForm/RegistrationForm'
import { Layout } from './Layout/Layout'
import { Favorites } from './pages/Favorites/Favorites'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='/' index element={<Home />} />
				<Route path='/apartmentCatalog' element={<ApartamentCatalog />} />
				<Route path='/news' exact element={<News />} />
				<Route path='/news/:id' exact element={<NewsDetail />} />
				<Route path='/contacts' exact element={<Сontacts />} />
				<Route path='/favorites' exact element={<Favorites />} />
				<Route path='*' element={<NotFound />} />
			</Route>
			<Route path='/registr' exact element={<RegistrationForm />} />
			<Route path='/authForm' exact element={<AuthForm />} />
		</Routes>
	)
}

export default App
