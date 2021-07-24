
// import './App.css';
import './css/main.css';
import { Route, BrowserRouter, Switch, Router} from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import AdminHeader from './components/Admin/AdminHeader/AdminHeader';
// import  Model  from './component/videoModal'

// Cấu hình thư viện điều hướng trang
import { createBrowserHistory } from 'history';
import { UserTemplate } from './template/UserTemplate/UserTemplate';
import { AdminTemplate } from './template/AdminTemplate/AdminTemplate';
import FilmDetail from './pages/FilmDetail/FilmDetail';
import BookingStickets from './pages/BookingStickets/BookingStickets';
import ListFilm from './pages/Admin/ListFilm/ListFilm';
import ListUser from './pages/Admin/ListUser/ListUser';
import  Empty  from './components/Admin/Empty/Empty';
import ListCinema from './pages/Admin/ListCinema/ListCinema';
import RapManage from './pages/Admin/RapManage/RapManage';
import PersonBooked from './pages/Admin/PersonBooked/PersonBooked';
import MovieShedule from './pages/Admin/MovieShedule/MovieShedule';
import SeatMap from './pages/Admin/SeatMap/SeatMap';
import MovieSheduleCinema from './pages/Admin/MovieSheduleCinema/MovieSheduleCinema';
import ListMovieSheduleCinema from './pages/Admin/MovieSheduleCinema/ListMovieSheDuleCinema/ListMovieSheduleCinema';
import MovieSheduleByFilm from './pages/Admin/MovieSheduleByFilm/MovieSheduleByFilm';
export const history = createBrowserHistory();



function App() {
  return (  
    <Router history={history}>
    <div className="App">
      <Switch>
        <UserTemplate path="/" exact component={Home} />
        <UserTemplate path="/home" exact component={Home} />
        <UserTemplate path="/login" exact component={Login}/>
        <UserTemplate path="/register" exact component={Register}/>
        <Route path="/phim/:maPhim"  component={FilmDetail}/>
        <Route path="/phim-review/:maPhim"  component={FilmDetail}/>
        <Route path="/dat-ve/:maRap/:maLichChieu"  component={BookingStickets}/>
        <AdminTemplate path="/admin" exact component={Empty} />
        <AdminTemplate path="/admin/list-film" exact component={ListFilm} />
        <AdminTemplate path="/admin/list-cinema" exact component={ListCinema} />
        <AdminTemplate path="/admin/list-cinema/:maHeThongRap/:maCumRap" exact component={RapManage} />
        <AdminTemplate path="/admin/list-user" exact component={ListUser} />
        <AdminTemplate path="/admin/i-detail/:taiKhoan" exact component={PersonBooked} />
        <AdminTemplate path="/admin/movie-shedule" exact component={MovieShedule} />
        <AdminTemplate path="/admin/movie-shedule/:maPhim" exact component={MovieSheduleByFilm} />
        <AdminTemplate path="/admin/shedule-cinema" exact component={MovieSheduleCinema} />
        <AdminTemplate path="/admin/shedule-cinema/:maHeThongRap" exact component={ListMovieSheduleCinema} />
        <AdminTemplate path="/admin/seat-map/:maLichChieu" exact component={SeatMap} />
        <Route parth="*" component={PageNotFound}/> 
      </Switch>
    </div>
    </Router>
  );
}

export default App;
