import { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import './App.scss';

class App extends Component {
  render(): JSX.Element {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            อิหยังวะหนิ ฮัลโหลลลวัดตตาฟัค Edit <code>src/App.tsx</code> and save
            to jing a paw.
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
      </div>
    );
  }
}

export default App;
