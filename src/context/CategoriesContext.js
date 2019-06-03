import React, { Component } from 'react';
import axios from 'axios';

const CategoriesContext = React.createContext();
export const CategoriesConsumer = CategoriesContext.Consumer;

class CategoriesProvider extends Component {
  tokenDevelopment = 'EJCRMXI5WZ7GE2BBLFE3';
  tokenProduction = 'FYGFE5YCXMUG22VMB2OM';

  state = {
    categories: []
  }

  componentDidMount () {
    this.getCategories();
  }

  getCategories = async () => {
    let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.tokenDevelopment}`

    let categories = await axios.get(url);
    console.log(categories.data.categories);
    this.setState({
      categories: categories.data.categories
    })
  }

  render (){
    return (
      <CategoriesContext.Provider
        value={{
          categories: this.state.categories
        }}
      >
      {this.props.children}
      </CategoriesContext.Provider>
    );
  }
}

export default CategoriesProvider;
