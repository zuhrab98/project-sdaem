import React from 'react'

import cn from 'classnames'
import { NavLink } from 'react-router-dom'

import styles from './NavLink.module.scss'
import { NavLinkProps } from './interface'
import { Icons } from '../../../components/Icons/Icons'

export const NavLinks: React.FC<NavLinkProps> = ({
    navs,
    appearance,
}) => {
    return (
        <ul className={styles.nav}>
            {navs.map((item, i) => (
                <li
                    key={i}
                    className={cn(styles.navLink, {
                        [styles.headerTopLink]: appearance === 'grey',
                    })}
                >
                    <NavLink
                        className={({ isActive }) => (isActive ? styles.active : '')}
                        to={`${item.path}`}
                    >
                        {item?.icon && <Icons id={item?.icon} size={{ w: 8, h: 10 }} />}
                        {item.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}
