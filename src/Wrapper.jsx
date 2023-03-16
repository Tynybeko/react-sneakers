import './App.scss';

function Wrapper() {
  return (
    <div className="wrapper">
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
        <h1>Все кроссовки</h1>
        <div className="sneakers">
          <div className="card">
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
