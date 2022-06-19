import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from "react-dom/client";

import '../src/scss/app.scss'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Router>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Router>
)
