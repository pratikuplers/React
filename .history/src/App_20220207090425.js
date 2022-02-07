import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import reactDom from 'react-dom';

function App() {
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );

  const handleChange = (event) => {
    setTextarea(event.target.value)
  }

  return (
    <form>
      <textarea value={textarea} onChange={handleChange} />
    </form>
  )
}

export default App;
