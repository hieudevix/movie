import logo from './logo.svg';
// import './App.css';
import './css/main.css';
import Loader from './components/Loader/Loader';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';

function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <Loader/>
    </div>
  );
}

export default App;
