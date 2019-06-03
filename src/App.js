import React, { Component} from 'react';
import Header from './components/Header'
import CategoriesProvider from './context/CategoriesContext'
import Form from './components/Form';

class App extends Component {
  render (){
    return (
      <div className="App">
        <CategoriesProvider>
          <Header/>
          <div className="uk-container">
            <Form/>
          </div>
        </CategoriesProvider>
      </div>
    );
  }
}

export default App;
