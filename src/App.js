import logo from './logo.svg';
// import './App.css';
import './css/main.css';
import Loader from './components/Loader/Loader';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import { createBrowserHistory } from 'history';
import Tab from './components/Tabs/Tab';
import ListCinemas from './components/ListCinemas/ListCinemas';
import Introduce from './components/Introduce/Introduce';
import Footer from './components/Footer/Footer';
import Article from './components/Article/Article';

// Cấu hình thư viện điều hướng trang
export const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <Tab/>
      <ListCinemas/>
      <Article/>
      <Introduce/>
      <Footer/>
      {/* <Loader/> */}
    </div>
  );
}

export default App;
