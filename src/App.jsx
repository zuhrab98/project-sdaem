import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home/Home'
import { NewsDetail } from './pages/NewsDetail/NewsDetail'
import { Сontacts } from './pages/Сontacts'
import { NotFound } from './pages/NotFound'
import { News } from './pages/News/News'

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' index element={<Home />} />
				<Route path='news' exact element={<News />} />
				<Route path='news/:id' element={<NewsDetail />} />
				<Route path='contacts/' element={<Сontacts />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	)
}

export default App
