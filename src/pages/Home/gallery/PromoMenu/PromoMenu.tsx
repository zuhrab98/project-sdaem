import React from 'react'

import cn from 'classnames'
import { Icons } from 'components/Icons/Icons'
import { Link } from 'react-router-dom'
import { setFiltered } from 'redux/slices/filterSlice'
import { useAppDispatch } from 'redux/store'

import { PromoMenuProps, PromoMenuParams } from './inteface'
import styles from './PromoMenu.module.scss'

export const PromoMenu: React.FC<PromoMenuProps> = ({ data, showMore, title }) => {
    const [visibleLinksMore, setvisibleLinksMore] = React.useState(false)
    const dispatch = useAppDispatch()

    const toggleVisibleLinksMore = () => {
        setvisibleLinksMore((prev) => !prev)
    }

    const handleOnClick = (item: PromoMenuParams) => {
        dispatch(setFiltered({ name: item?.citi, filterProperty: 'citi' }))
    }

    return (
        <div className={styles.groupMenu}>
            <h3 className={styles.title}>{title}</h3>
            <div
                className={cn(styles.list, {
                    [styles.showMoreLinks]: visibleLinksMore,
                })}
            >
                {data &&
                  data.map((item, index) => (
                      <Link
                          key={index}
                          className={styles.link}
                          onClick={() => handleOnClick(item)}
                          state={{ paramName: item.paramName }}
                          to="/apartmentCatalog"
                      >
                          <span className={styles.name}>{item.name}</span>
                          {item.count ? (
                              <span className={styles.count}>{item.count}</span>
                          ) : (
                              ''
                          )}
                      </Link>
                  ))}
            </div>

            {showMore && (
                <span
                    className={cn(styles.arrowMore, {
                        [styles.arrowMoreToggle]: visibleLinksMore,
                    })}
                    onClick={toggleVisibleLinksMore}
                    role="button"
                >
                    Еще
                    <Icons id="arrow-more" />
                </span>
            )}
        </div>
    )
}
