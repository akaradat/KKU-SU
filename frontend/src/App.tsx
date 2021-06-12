import React from 'react';
import Axios from 'axios';
import logo from './logo.svg';
//import './App.css';
import './App.scss';

class App extends React.Component<any, any> {
  constructor(props: void) {
    super(props);
    this.state = {
      isTrue: false,
    };
  }
  componentDidMount(): void {
    // console.log(process.env);
    // console.log(process.env.REACT_APP_BACKEND);
    Axios.get(`${process.env.REACT_APP_BACKEND_API_HOST}`).then((resp) => {
      const RESULT = resp.data;
      if (RESULT === 'hello world') {
        console.log(RESULT);
        this.setState(() => ({ isTrue: 'Available' }));
        return;
      }
      this.setState(() => ({ isTrue: 'Unloveable' }));
    });
  }
  render(): JSX.Element {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Backend:{this.state.isTrue}
          </a>
          <h2>{`Current Process: ${process.env.REACT_APP_NAME}`}</h2>
        </header>
      </div>
    );
  }
}

export default App;
