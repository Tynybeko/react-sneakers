import React from 'react'

function Cards() {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/heart__first.svg" alt="Unliked" />
            </div>
            <img width={133} height={112} src="/sneakers/3.jpg" alt="sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div>
                <div>
                    <span>Цена:</span>
                    <b>12 999 руб.</b>
                </div>
                <button>
                    <img width={11} height={11} src="/img/plus.svg" alt="plus" />
                </button>
            </div>
        </div>
    )
}
export default Cards