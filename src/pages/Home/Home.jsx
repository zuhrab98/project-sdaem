import React from 'react'

import { Layout } from '../../Layout/Layout'
import { HomeFilters } from './filters-section/HomeFilters'
import { GallerySections } from './gallery-section/GallerySections'
import { RentSection } from './rent-section/RentSection'

export const Home = () => {
	return (
		<Layout>
			<HomeFilters />
			<GallerySections />
			<RentSection />
		</Layout>
	)
}
