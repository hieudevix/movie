import logo from './logo.svg';
// import './App.css';
import './css/main.css';
import { Route, BrowserRouter, Switch, Router} from 'react-router-dom';
import Loader from './components/Loader/Loader';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import { createBrowserHistory } from 'history';
import Tab from './components/Tabs/Tab';
import ListCinemas from './components/ListCinemas/ListCinemas';
import Introduce from './components/Introduce/Introduce';
import Footer from './components/Footer/Footer';
import Article from './components/Article/Article';
import { UserTemplate } from './template/UserTemplate/UserTemplate';
import { AdminTemplate } from './template/AdminTemplate/AdminTemplate';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import AdminHeader from './components/Admin/AdminHeader/AdminHeader';
// Cấu hình thư viện điều hướng trang
export const history = createBrowserHistory();


function App() {
  return (
    <BrowserRouter history={history}>
    <div className="App">
      <Switch>
        <UserTemplate path="/" exact component={Home} />
        <UserTemplate path="/home" exact component={Home} />
        <UserTemplate path="/login" exact component={Login}/>
        <UserTemplate path="/register" exact component={Register}/>
        <AdminTemplate path="/admin" exact component={AdminHeader} />
        <UserTemplate component={PageNotFound}/>
        

      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
