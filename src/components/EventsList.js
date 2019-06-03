import React from 'react';
import Event from './Event'
import { EventsConsumer } from '../context/EventsContext';

const EventsList = () => (
  <div className="uk-child-width-1-3@m" uk-grid="true">
    <EventsConsumer>
      {(value) => {
        return value.events.map(event => (
          <Event
            
          />
        ))
      }}
    </EventsConsumer>
  </div>
);

export default EventsList;
