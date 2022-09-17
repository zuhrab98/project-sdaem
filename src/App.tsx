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

const App: React.FC = () => {
    return (
        <Routes>
            <Route element={<Layout />} path="/">
                <Route element={<Home />} path="/" />
                <Route element={<ApartamentCatalog />} path="/apartmentCatalog" />
                <Route element={<News />} path="/news" />
                <Route element={<NewsDetail />} path="/news/:id" />
                <Route element={<Сontacts />} path="/contacts" />
                <Route element={<Favorites />} path="/favorites" />
                <Route element={<NotFound />} path="*" />
            </Route>
            <Route element={<RegistrationForm />} path="/registr" />
            <Route element={<AuthForm />} path="/authForm" />
        </Routes>
    )
}

export default App
