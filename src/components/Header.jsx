import React from 'react'
import Drawer from './Drawer'

export default function Header() {
    return (
        <header>
            <div className='headerLeft'>
                <img width={40} height={40} src='/img/logo.png' />
                <div className='headerInfo'>
                    <h3>React Sneakers</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className='headerRight'>
                <li className='lione'>
                    <img src='/img/card.svg' alt='Cart'/>
                    <span>1205 руб.</span>
                </li>
                <li>
                    <img src='/img/user.svg' />
                </li>
            </ul>
        </header>
    )
}
