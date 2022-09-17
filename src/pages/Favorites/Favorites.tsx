import React from 'react'

import styles from './Favorites.module.scss'


export const Favorites: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className="container">
                <div className={styles.header}>
                    <h1>Мои закладки</h1>
                </div>
                <div className={styles.row}></div>
            </div>
        </div>
    )
}
