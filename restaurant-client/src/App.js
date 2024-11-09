import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <h1>Restaurant Management System</h1>
        </Route>
        {/* Add routes for your components */}
      </Switch>
    </Router>
  );
}

export default App;
