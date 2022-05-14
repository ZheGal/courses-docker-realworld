import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const makeApiRequest = () => {
    axios("/api/testWithCurrentUser").then(response => {
      console.log('Data', response.data);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I want to remove this text. This is working here huh!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={makeApiRequest}>Make api request</button>
      </header>
    </div>
  );
}

export default App;
