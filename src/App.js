import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Ryan Jentzsch's Profile page
        </p>
        <Button onClick={(e)=>alert('Button clicked')}>Test</Button>
      </header>
    </div>
  );
}

export default App;
