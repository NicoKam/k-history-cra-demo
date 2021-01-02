import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello, welcome to k-history cra demo.</p>
        <p></p>
        <Link className="App-link" to="/step1">
          Let's go.
        </Link>
      </header>
    </div>
  );
}

export default App;
