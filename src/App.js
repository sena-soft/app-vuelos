import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Flights from './components/Flights';
import Checkout from './components/Checkout';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Router>
      <Provider store={store}>
          <Header />

          <div className="container mt-5">
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/flights" component={Flights} />
                  <Route exact path="/checkout" component={Checkout} />
              </Switch>
          </div>
      </Provider>
    </Router>
  );
}

export default App;
