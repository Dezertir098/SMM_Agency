import logo from './logo.svg';
import React from 'react';
import Header from './header'; // Импортируем компонент Header
import Cover from './cover'; // Импортируем компонент Cover
import About_us from './about_us';

function App() {
  return (
    <div className="App">
      <Header />  {/* Вставляем компонент Header */}
      <Cover />  {/* Вставляем компонент Header */}
      <About_us />
    </div>
  );
}

export default App;
