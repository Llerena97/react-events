import React, { Component} from 'react';
import axios from 'axios';

const EventsContext = React.createContext();
export const EventsConsumer = EventsContext.Consumer;

class EventsProvider extends Component {
  tokenDevelopment = 'EJCRMXI5WZ7GE2BBLFE3';
  tokenProduction = 'FYGFE5YCXMUG22VMB2OM';
  sort = 'date'

  state = {
    events: []
  }

  getEvents = async (search) => {
    const url = `https://www.eventbriteapi.com/v3/events/search/?q=${search.name}&categories=${search.category}&sort_by=${this.sort}&token=${this.token}`

  }

  render(){
    return(
      <div></div>
    )
  }
}

export default EventsProvider;
