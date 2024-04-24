import logo from './logo.svg';
import CookieTwoToneIcon from '@mui/icons-material/CookieTwoTone';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CookieTwoToneIcon style={{fontSize:'72px'}}/>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
