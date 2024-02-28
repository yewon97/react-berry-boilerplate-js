import logo from './logo.svg';
import './App.css';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Test from '@/components/test';

const containerStyles = css`
  background-color: pink;
`;

const Button = styled.button`
  width: 200px;
  height: 200px;
  background: pink;
`;

function App() {
  return (
    <div className="App" css={containerStyles}>
      <header className="App-header">
        <Button>버튼</Button>
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
      <Test />
    </div>
  );
}

export default App;
