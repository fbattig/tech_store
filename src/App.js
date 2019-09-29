import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHome } from 'react-icons/fa';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <h1> Hello from  react <FaHome />
      </h1>
        <Button large >Felix Battig </Button>
    </div>
  );
}

const color= "#f15025";
const Button = styled.button`
color: white;
background: ${color};
font-size: ${(props) => props.large?'3rem' : '1rem'};
`


export default App;
