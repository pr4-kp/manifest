import logo from './logo.svg';
import './App.css';
import MyDialog from './components/MyDialog.js';
import React, {useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/hello").then(
      res => res.json()
    ).then(
      data=> {
        setData(data)
        console.log(data)
      }
    )
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <MyDialog isOpen={true} />
      </header>
    </div>
  );
}

export default App;
