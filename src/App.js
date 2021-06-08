import logo from './logo.svg';
// import './App.css';
import './css/main.css';
import Loader from './components/Loader/Loader';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Loader/>
    </div>
  );
}

export default App;
