import './App.scss';
import Cards from './components/Cards'
import Drawer from './components/Drawer';
import Header from './components/Header';
const arr = [
  { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl: '/sneakers/1.jpg' },
  { title: 'Мужские Кроссовки Nike Air Max 270', price: 15600, imageUrl: '/sneakers/2.jpg' },
  { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, imageUrl: '/sneakers/3.jpg' },
  { title: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, imageUrl: '/sneakers/4.jpg' },
  { title: 'Мужские Кроссовки Under Armour Curry 8', price: 8999, imageUrl: '/sneakers/5.jpg' },
  { title: 'Мужские Кроссовки Nike Kyrie 7', price: 13000, imageUrl: '/sneakers/6.jpg' },
  { title: 'Мужские Кроссовки Jordan Air Jordan 11', price: 11200, imageUrl: '/sneakers/7.jpg' },
  { title: 'Мужские Кроссовки Nike LeBron XVIII', price: 7800, imageUrl: '/sneakers/8.jpg' },
  { title: 'Мужские Кроссовки Nike Lebron XVIII Low', price: 14000, imageUrl: '/sneakers/9.jpg' },
  { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 15120, imageUrl: '/sneakers/10.jpg' },
  { title: 'Кроссовки Puma X Aka Boku Future Rider', price: 8200, imageUrl: '/sneakers/11.jpg' },
  { title: 'Мужские Кроссовки Nike Kyrie Flytrap IV', price: 12990, imageUrl: '/sneakers/12.jpg' },
]



function Wrapper() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="content">
        <div className='content__title'>
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input id='12' type="text" placeholder='Search...' />
          </div>
        </div>
        <div className="sneakers">
          {
            arr.map(obj =>
              <Cards title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl} />
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
