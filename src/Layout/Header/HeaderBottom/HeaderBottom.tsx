import React from 'react'

import { Button } from 'components/Button/Button'
import { Link } from 'react-router-dom'
import { NavHeaderBottom } from 'components/NavHeaderBottom/NavHeaderBottom'
import data from 'api/data.json'

import styles from './HeaderBottom.module.scss'

export const HeaderBottom: React.FC = () => {

    return (
        <div className={styles.bottom}>
            <div className="container">
                <div className={styles.wrapper}>
                    <Link className={styles.logo} to="/">
                        <img alt="logo" height={19} src="/img/logo.svg" width={134} />
                    </Link>

                    <div className={styles.nav}>
                        <NavHeaderBottom param={data.NAVS_BY_PARAMS.rooms} />
                        <NavHeaderBottom param={data.NAVS_BY_PARAMS.cottages} />
                        <NavHeaderBottom param={data.NAVS_BY_PARAMS.baths} />
                        <NavHeaderBottom param={data.NAVS_BY_PARAMS.cars} />
                    </div>
                    <div>
                        <Button name="addAdvert" path="/advertisement" tag="a">
                            <span>+</span> Разместить объявление
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
