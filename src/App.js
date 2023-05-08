//react
import React, {Component} from 'react';
import { HashRouter, Route } from 'react-router-dom';
//imports
  
class App extends portfolio
{
  render() {
    return (
      <HashRouter basename="/">
        <div className="app">
          <Header />
          <main>

            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </main>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
