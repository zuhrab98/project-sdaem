import { FilterPropertyType } from "../../../type"

export interface OptionType {
  id: number
  name: string
  label: string
  checkbox?: boolean
}

export interface MoreOptionsProps {
	filtered: {
		places: FilterPropertyType
		region: FilterPropertyType
		metro: FilterPropertyType
	}
	visibleOptions: boolean
}