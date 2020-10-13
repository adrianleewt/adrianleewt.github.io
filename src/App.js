import React from 'react';
import styled from 'styled-components';

import Landing from './components/Landing';

import { HashRouter, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <HashRouter>
        <Route exact path='/' component={Landing} />
      </HashRouter>
    </div>
  );
}

export default App;
