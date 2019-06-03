import React from 'react';

const Event = ({event}) => {
  return (
    <div>
      <div className="uk-card uk-card-default">
        <div className="uk-card-media-top">
        {event.logo ?
          <img src={event.logo.url} alt={event.name} />
          : null }
          </div>
          <div className="uk-card-body">
          <h3 className="uk-card-title">{event.name.text}</h3>
          </div>
          <div className="uk-card-footer">
          <a className="uk-button uk-button-secondary" href={event.url}>More Info</a>
          </div>
        </div>
      </div>
  )
};

export default Event;
