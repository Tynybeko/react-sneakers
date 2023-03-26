import React from 'react'

 function Drawer() {
    return (
        <div style={{ display: 'none' }} className="overlay">
            <div className="drawer">
                <h2>Корзина <img src="/img/btn_remote.svg" alt="Remote" /></h2>
                <div className="items">
                    <div className="cartItem">
                        <div style={{ backgroundImage: 'url(/sneakers/1.jpg)' }} className="cartItemImg"></div>
                        <div>
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className='remoteBtn' src="/img/btn_remote.svg" alt="Remote" />
                    </div>
                    <div className="cartItem">
                        <div style={{ backgroundImage: 'url(/sneakers/2.jpg)' }} className="cartItemImg"></div>
                        <div>
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className='remoteBtn' src="/img/btn_remote.svg" alt="Remote" />
                    </div>
                    <div className="cartItem">
                        <div style={{ backgroundImage: 'url(/sneakers/1.jpg)' }} className="cartItemImg"></div>
                        <div>
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className='remoteBtn' src="/img/btn_remote.svg" alt="Remote" />
                    </div>
                    <div className="cartItem">
                        <div style={{ backgroundImage: 'url(/sneakers/2.jpg)' }} className="cartItemImg"></div>
                        <div>
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className='remoteBtn' src="/img/btn_remote.svg" alt="Remote" />
                    </div>
                    <div className="cartItem">
                        <div style={{ backgroundImage: 'url(/sneakers/1.jpg)' }} className="cartItemImg"></div>
                        <div>
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className='remoteBtn' src="/img/btn_remote.svg" alt="Remote" />
                    </div>
                    <div className="cartItem">
                        <div style={{ backgroundImage: 'url(/sneakers/2.jpg)' }} className="cartItemImg"></div>
                        <div>
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className='remoteBtn' src="/img/btn_remote.svg" alt="Remote" />
                    </div>
                    <div className="cartItem">
                        <div style={{ backgroundImage: 'url(/sneakers/1.jpg)' }} className="cartItemImg"></div>
                        <div>
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className='remoteBtn' src="/img/btn_remote.svg" alt="Remote" />
                    </div>
                    <div className="cartItem">
                        <div style={{ backgroundImage: 'url(/sneakers/2.jpg)' }} className="cartItemImg"></div>
                        <div>
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className='remoteBtn' src="/img/btn_remote.svg" alt="Remote" />
                    </div>

                </div>

                <div className="cartTotalBlock">
                    <ul className='drawer__footer'>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498 руб. </b>
                        </li>
                        <li>
                            <span>Налог 5%: </span>
                            <div></div>
                            <b>1074 руб. </b>
                        </li>
                    </ul>
                    <button className='greenBtn'>Оформить заказ <img src="/img/arrow.svg" alt="Arrow" /></button>
                </div>

            </div>
        </div>
    )
}

export default Drawer