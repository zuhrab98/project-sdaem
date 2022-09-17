import React from 'react'

import cn from 'classnames'
import { Link } from 'react-router-dom'

import styles from './Button.module.scss'
import { ButtonProps } from './interface'

export const Button: React.FC<ButtonProps> = ({
    children,
    name,
    tag,
    path,
    type,
    onClick,
}) => {
    return (
        <>
            {tag === 'a' ? (
                <Link
                    className={cn(styles.button, {
                        [styles.openMap]: name === 'openMap',
                        [styles.yellowGradient]: name === 'yellowGradient',
                        [styles.yellow]: name === 'yellow',
                        [styles.show]: name === 'show',
                        [styles.addAdvert]: name === 'addAdvert',
                        [styles.lightYellow]: name === 'lightYellow',
                        [styles.lightPrimary]: name === 'lightPrimary',
                        [styles.buttonDef]: name === 'buttonDef',
                    })}
                    to={`${path}`}
                >
                    {children}
                </Link>
            ) : (
                <button
                    className={cn(styles.button, {
                        [styles.return]: name === 'return',
                        [styles.buttonDef]: name === 'buttonDef',
                        [styles.lightYellow]: name === 'lightYellow',
                        [styles.error]: name === 'error',
                        [styles.show]: name === 'show',
                        [styles.yellowGradient]: name === 'yellow',
                        [styles.fav]: name === 'fav',
                        [styles.beige]: name === 'beige',
                        [styles.disableBtn]: name === 'disableBtn',
                    })}
                    onClick={onClick}
                    type={type}
                >
                    {children}
                </button>
            )}
        </>
    )
}
