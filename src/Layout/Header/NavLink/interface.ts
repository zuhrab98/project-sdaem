import { Selecteds } from '../../../components/HeaderSelected/interface'

export interface NavLinkProps {
	navs: { name: string; paramName?: string; path?: string; icon?: string }[]
	appearance: string
	selecteds?: Selecteds
}
