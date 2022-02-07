import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import reactDom from 'react-dom';

function App() {
  const [name, setName] = useState(""); 
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Your Username: <input type="text" value="{name}" onChange={ (e)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
    /**<div className="App">
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
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
