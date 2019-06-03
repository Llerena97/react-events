import React, { Component, Fragment } from 'react';
import Header from './components/Header'

class App extends Component {
  render (){
    return (
      <div className="App">
        <Fragment>
          <Header/>
        </Fragment>
      </div>
    );
  }
}

export default App;
