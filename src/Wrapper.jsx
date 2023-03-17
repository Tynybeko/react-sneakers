import './App.scss';

function Wrapper() {
  return (
    <div className="wrapper">
      <div className="overlay">
        <div className="drawer">
          <h2>Корзина</h2>
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
          </div>
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
        </div>
      </div>
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
      <div className="content">
        <div className='content__title'>
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input type="text" placeholder='Search...' />
          </div>
        </div>
        <div className="sneakers">
          <div className="card">
            <div className="favorite">
              <img src="/img/heart__first.svg" alt="Unliked" />
            </div>
            <img width={133} height={112} src="/sneakers/1.jpg" alt="sneakers" />
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
          <div className="card">
            <img width={133} height={112} src="/sneakers/2.jpg" alt="sneakers" />
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
          </div> <div className="card">
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
          </div> <div className="card">
            <img width={133} height={112} src="/sneakers/4.jpg" alt="sneakers" />
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
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
