import React from 'react'

import cn from 'classnames'

import styles from './Socials.module.scss'
import { SocialsProps } from './interface'
import { Icons } from '../Icons/Icons'

export const Socials: React.FC<SocialsProps> = ({
    socials,
    className,
    width,
    height,
    fill,
}) => {
    return (
        <ul
            className={cn(styles.socialsList, {
                [styles.socialContact]: className === 'socialContact',
                [styles.socialFooter]: className === 'socialFooter',
                [styles.socialNews]: className === 'socialNews',
            })}
        >
            {socials.map((social) => (
                <li key={social.icon}>
                    <a href={social.href} rel="noreferrer" target="_blank">
                        <Icons
                            fill={fill}
                            id={social.icon}
                            size={{ w: width, h: height }}
                        />
                    </a>
                </li>
            ))}
        </ul>
    )
}
