import React from 'react'

import cn from 'classnames'

import styles from './Label.module.scss'
import { LabelProps } from './interface'

export const Label: React.FC<LabelProps> = ({
    type,
    children,
    onClick,
    setChildRef,
}) => {
    const labelRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        if (type === 'primaryPointer') {
            setChildRef(labelRef)
        }
    }, [labelRef, setChildRef, type])

    return (
        <div
            ref={labelRef}
            className={cn(styles.label, {
                [styles.location]: type === 'location',
                [styles.labelPrimary]: type === 'primary',
                [styles.primaryPointer]: type === 'primaryPointer',
                [styles.lightGrey]: type === 'lightGrey',
            })}
            onClick={onClick}
        >
            {children}
        </div>
    )
}
