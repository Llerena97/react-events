import React, { Component} from 'react';
import Header from './components/Header'
import CategoriesProvider from './context/CategoriesContext'
import EventsProvider from './context/EventsContext';
import Form from './components/Form';

class App extends Component {
  render (){
    return (
        <EventsProvider>
          <CategoriesProvider>
            <Header/>
            <div className="uk-container">
              <Form/>
            </div>
          </CategoriesProvider>
        </EventsProvider>
    );
  }
}

export default App;
