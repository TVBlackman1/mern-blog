import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routers } from "./routers"
import 'materialize-css'

function App() {
  return (
    <div className="App">
      Hello world
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </div>
  );
}

export default App;
