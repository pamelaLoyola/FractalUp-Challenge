import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="search"></div>
        <Sidebar></Sidebar>
        <main id="main"></main>
        <footer></footer>
      </div>
    </div>
  );
}

export default App;
