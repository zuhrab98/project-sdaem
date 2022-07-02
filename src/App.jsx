import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home/Home'
import { NewsDetail } from './pages/News-datail/NewsDetail'
import { Сontacts } from './pages/Сontacts'
import { NotFound } from './pages/NotFound'
import { News } from './pages/News/News'


const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='news' element={<News />} />
				<Route path='contacts' element={<Сontacts />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	)
}

export default App
