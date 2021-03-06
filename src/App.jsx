import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home/Home'
import { ApartamentCatalog } from './pages/ApartamentCatalog/ApartamentCatalog'
import { NewsDetail } from './pages/NewsDetail/NewsDetail'
import { Сontacts } from './pages/Сontacts'
import { NotFound } from './pages/NotFound/NotFound'
import { News } from './pages/News/News'
import { AuthForm } from './pages/AuthForm/AuthForm'
import { RegistrationАorm } from './pages/RegistrationАorm/RegistrationАorm'

const App = () => {
	return (
		<Routes>
			<Route path='/' index element={<Home />} />
			<Route path='/apartmentCatalog' element={<ApartamentCatalog />} />
			<Route path='/news' exact element={<News />} />
			<Route path='/news/:id' exact element={<NewsDetail />} />
			<Route path='/contacts' exact element={<Сontacts />} />
			<Route path='/authForm' exact element={<AuthForm />} />
			<Route path='/registr' exact element={<RegistrationАorm />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}

export default App
