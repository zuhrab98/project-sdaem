import React from 'react'

import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import styles from './Lists.module.scss'
import { setFiltered } from '../../redux/slices/filterSlice'
import { ListProps, ParamLists } from './interface'
import { setTabs } from '../../redux/slices/homeSlice'

export const Lists: React.FC<ListProps> = ({ lists, tag }) => {
    const Tag = tag
    const dispatch = useDispatch()

    const handlerClick = (item: ParamLists) => {
        if (!item.paramName) {
            dispatch(setFiltered({ name: item.citi, filterProperty: 'citi' }))
        }
        dispatch(setTabs({name: item.name, paramName: item.paramName, property: item.property}))
    }

    return (
        <>
            {lists &&
              lists.map((item, i) => (
                  <li key={i} className={styles.item}>
                      {Tag && (
                          <Link
                              onClick={() => handlerClick(item)}
                              state={{ paramName: item?.paramName }}
                              to={item.path ? item.path : '/apartmentCatalog'}
                          >
                              {item.name}
                          </Link>
                      )}
                      {Tag === undefined && item.name}
                  </li>
              ))}
        </>
    )
}
