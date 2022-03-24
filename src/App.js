import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './Router';

function App() {
  return (
    <React.Suspense fallback={<></>}>
      <Router>
        <Routing />
      </Router>
    </React.Suspense>
  );
}

export default App;
