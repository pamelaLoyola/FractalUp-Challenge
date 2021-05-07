import './App.css';
import Sidebar from './components/Sidebar';
import SearchBox from './components/SearchBox';
import Main from './components/Main';
import Player from './components/Player';

function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchBox></SearchBox>
        <Sidebar></Sidebar>
        <Main></Main>
        <Player></Player>
      </div>
    </div>
  );
}

export default App;
