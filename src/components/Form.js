import React, { Component} from 'react';
import { CategoriesConsumer } from '../context/CategoriesContext';
import { EventsConsumer } from '../context/EventsContext';

class Form extends Component {
  state = {
    name: '',
    category: ''
  }

  getDataEvent = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render (){
    return (
      <EventsConsumer>
      {(value) => {
          return (
          <form
            onSubmit={ e => {
              e.preventDefault();
              value.getEvents(this.state);
            }}
          >
            <fieldset className="uk-fieldset uk-margin">
            <legend className="uk-legend text-center">
            Find Events By Name or Category
            </legend>
            </fieldset>
            <div className="uk-column-1-3@m uk-margin">
            <div className="uk-margin" uk-margin="true">
            <input
            name="name"
            type="text"
            className="uk-input"
            placeholder="Name Event or City"
            onChange={this.getDataEvent}
            />
            </div>
            <div className="uk-margin" uk-margin="true">
            <select
            className="uk-select"
            name="category"
            onChange={this.getDataEvent}
            >
            <option>Select a category</option>
            <CategoriesConsumer>
            {(value) => {
              return (
                value.categories.map(category => (
                  <option
                  key={category.id}
                  value={category.id}
                  data-uk-form-select
                  >
                  {category.name}
                  </option>
                ))
              )
            }}
            </CategoriesConsumer>
            </select>
            </div>
            <div className="uk-margin" uk-margin="true">
            <input
            type="submit"
            className="uk-button uk-button-danger"
            value="Find Events"
            />
            </div>
            </div>
          </form>
        );
      }}
      </EventsConsumer>
    );
  }
}

export default Form;
