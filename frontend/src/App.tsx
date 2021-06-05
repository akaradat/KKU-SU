import { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import './App.scss';
console.log(process.env);
class App extends Component {
  render(): JSX.Element {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            อิหยังวะหนิ ฮัลโหลลลวัดตตาฟัค Edit <code>src/App.tsx</code> and save
            to jing a paw. so i need to test again.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Oh My Gosh
          </a>
          <h2>{`${process.env.REACT_APP_NAME} testing`}</h2>
          <h2>{`${process.env.REACT_APP_FUCK} testing`}</h2>
        </header>
      </div>
    );
  }
}

export default App;
