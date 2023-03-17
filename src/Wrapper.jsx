import './App.scss';
import Cards from './components/Cards'
import Drawer from './components/Drawer';
import Header from './components/Header';

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
            <input type="text" placeholder='Search...' />
          </div>
        </div>
        <div className="sneakers">
          <Cards />

        </div>
      </div>
    </div>
  );
}

export default Wrapper;
