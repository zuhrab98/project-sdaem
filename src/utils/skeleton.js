import Skeleton from '../components/LocationCard/Skeleton'

export const skeleton = (col) => {
	return [...new Array(col)].map((_, index) => <Skeleton key={index} />)
}
