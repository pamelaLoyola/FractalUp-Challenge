import './App.css';
import Sidebar from './components/Sidebar';
import SearchBox from './components/SearchBox'

function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchBox></SearchBox>
        <Sidebar></Sidebar>
        <main id="main"></main>
        <footer></footer>
      </div>
    </div>
  );
}

export default App;
