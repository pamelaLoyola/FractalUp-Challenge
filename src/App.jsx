import './App.css';
import Sidebar from './components/Sidebar';
import SearchBox from './components/SearchBox';
import Player from './components/Player';

function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchBox></SearchBox>
        <Sidebar></Sidebar>
        <main id="main"></main>
        <Player></Player>
      </div>
    </div>
  );
}

export default App;
