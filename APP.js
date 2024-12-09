-App.js 

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Counter from "./Counter";

function Home() {
  return <h2>Home</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>

        <Link to="/counter">Counter</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/counter" element={<Counter />} />
      </Routes>
    </Router>
  );
}

export default App;


Counter. js 

import { useState } from "react";
import styles from "./Counter.module.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.counter}>
      <h1>Counter: {count}</h1>
      <button className={styles.button} onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;


Counter.module.css

.counter {
    background-color: lightblue;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
  }
  
  .button {
    padding: 10px;
    background-color: darkblue;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

CODIGO HORA 2: 

Componentes:
App. Js 
Counter.Js
Home.Js
UserProfile.Js

Estilos: 
Counter.module.css
Home.module.css
index.css 
UserProfile.module.css 
