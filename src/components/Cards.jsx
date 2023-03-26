import React from 'react'

function Cards(props) {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/heart__first.svg" alt="Unliked" />
            </div>
            <img width={133} height={112} src={props.imageUrl} alt="sneakers" />
            <h5>{props.title}</h5>
            <div>
                <div>
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <button>
                    <img width={11} height={11} src="/img/plus.svg" alt="plus" />
                </button>
            </div>
        </div>
    )
}
export default Cards