export interface GalleryAdsProps {
	data: {
		img: string
		title: string
		subtitle: string
		cities?: { citi: string }[]
		paramName?: string
	}[]
}
