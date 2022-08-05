import Skeleton from '../components/Skeleton/Skeleton'

export const skeleton = (col) => {
	return [...new Array(col)].map((_, index) => <Skeleton key={index} />)
}