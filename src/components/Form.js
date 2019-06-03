import React, { Component} from 'react';

class Form extends Component {
  state = {
    name: '',
    category: ''
  }
  render (){
    return (
      <form>
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
             />
          </div>
          <div className="uk-margin" uk-margin="true">
            <select
              className="uk-select"
              name="category"
            >
              <option

              >
              </option>
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
  }
}

export default Form;
