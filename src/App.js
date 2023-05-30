import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import HomepageContainer from './pages/Homepage/HomepageContainer';

const App = () => {
  
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomepageContainer} />
      </Switch>
    </Router>
  );
}

export default App;
