import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import reactDom from 'react-dom';

function App() {
  const [inputs, setInputs] = useState({}); 
  const handleChange = (event) => {
    const name = e.target.value;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}));
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
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
