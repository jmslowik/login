import { useState } from 'react';
import './App.css';

function App() {
  const [logged, setLogged] = useState(false)

  const onClick = () => {
    setLogged(!logged)
  }
  return (
    <div className="root">
      User<input ></input>
      Password<input type="password"></input>
      <button onClick={onClick}>{logged ? 'logout' : 'login'}</button>
      {logged ? 'user logged' : 'user not logged'}
    </div>
  );
}

export default App;
