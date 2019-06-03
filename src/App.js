import React, { Component} from 'react';
import Header from './components/Header'
import CategoriesProvider from './context/CategoriesContext'

class App extends Component {
  render (){
    return (
      <div className="App">
        <CategoriesProvider>
          <Header/>
        </CategoriesProvider>
      </div>
    );
  }
}

export default App;
