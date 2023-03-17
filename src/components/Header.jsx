import React from 'react'

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
                    <img src='/img/card.svg' />
                    <span>1205 руб.</span>
                </li>
                <li>
                    <img src='/img/user.svg' />
                </li>
            </ul>
        </header>
    )
}
