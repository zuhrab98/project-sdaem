import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import '../src/scss/app.scss'
import App from './App'
import { store } from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Router>
		<Provider store={store}>
			<App />
		</Provider>
	</Router>
)
