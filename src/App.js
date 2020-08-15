import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RoutesApp from 'routes';
import Header from 'components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="page-app-container">
          <div className="page-app"> 
            <RoutesApp />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
