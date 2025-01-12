import './App.css';
import "./style/app.css"
import Home from './Components/Home';
import Header from './Components/Header';
import Popular from './Components/Popular';




function App() {
  return (
    <div className="App">
      <Header />
      <Popular />
      <Home />
    </div>
  );
}

export default App;
