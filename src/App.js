import logo from './logo.svg';
import './App.css';
import "./style/app.css"
import Input from './Components/Input';
import Home from './Components/Home';
import Header from './Components/Header';
import Popular from './Components/Popular';




function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Popular />
    </div>
  );
}

export default App;
