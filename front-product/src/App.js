import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import TextLabel from "./components/TextLabel";
import ProductList from "./components/ProductList";

// const products = [
//   { id: 1, name: "Product 1" },
//   { id: 2, name: "Product 2" },
//   { id: 3, name: "Product 3" },
//   { id: 4, name: "Product 4" }
// ];

import axios from "axios";

class App extends Component {

  state = {
    products: []
  };

  componentDidMount() {
    axios
      // .get("https://jsonplaceholder.typicode.com/users")
      .get("http://localhost:8080/products")
      .then(response => {
        const newProducts = response.data.map(prd => {
          return {
            id: prd.id,
            name: prd.name,
            category: prd.category,
            size: prd.size,
            priceFrom: prd.priceFrom,
            priceTo: prd.priceTo,
            images: prd.images
          };
        });

        const newState = Object.assign({}, this.state, {
          products: newProducts
        });

        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <TextLabel />

        <ProductList products={this.state.products}/>

      </div>
    );
  }
}

export default App;
