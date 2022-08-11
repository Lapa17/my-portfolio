import React from 'react';
import logo from './logo.svg';
import style from './App.module.css';
import { Header } from './header/Header';
import { Main } from './main/Main';
import { Skills } from './skills/Skills';

function App() {
  return (
    <div className="App">
          <Header />
          <Main />
          <Skills />
    </div>
  );
}

export default App;
