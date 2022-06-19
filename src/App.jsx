import React from 'react'
import { Home } from './pages/Home/Home'
import { News } from './pages/News'
import { Route, Routes } from 'react-router-dom'
import { Error } from './pages/404'
import { Сontacts } from './pages/Сontacts'

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='news' element={<News />} />
				<Route path='error' element={<Error />} />
				<Route path='contacts' element={<Сontacts />} />
			</Routes>
		</>
	)
}

export default App
