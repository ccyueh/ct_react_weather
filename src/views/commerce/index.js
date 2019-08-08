import React, { Component } from 'react';
import './index.css';
import ProductsTable from '../../components/productsTable';
import ProductsCart from '../../components/productsCart';
import firebase from '../../firebase';

/*let products = [
  {
    'id': 1,
    'name': 'Hat',
    'price': 19.99
  },
  {
    'id': 2,
    'name': 'Shirt',
    'price': 10.95
  }
]*/

class Commerce extends Component {
  constructor() {
    super();

    this.state = {
      'products': [],
      'cart': []
    }

    // upload products to firebase for reference
    // only need to do this once; create a method to add/remove products
    //firebase.database().ref('products').set(products);
  }

  componentWillMount() {
    //this.setState({ products });

    // load products from firebase and set into local state
    const db_products = firebase.database().ref('products');
    const db_cart = firebase.database().ref('cart');

    db_cart.on('value', response => {
      let data = response.val();

      this.setState({ 'cart' : data });
    })

    // get db response
    db_products.on('value', response => {
      let data = response.val();

      this.setState({ 'products' : data });
    })
  }

  addItem = id => {
    // set state variables into local, as not to alter state directly
    let products = this.state.products;
    let cart = this.state.cart;

    // add item with correct id to local cart variable
    for (let i in products) {
      if (id == products[i].id) {
        //cart.push(products[i]);
        firebase.database().ref('cart').push(products[i]);
        break;
      }

    // set state with updated values
    }
    //this.setState({ cart });
    firebase.database().ref('cart').on('value', response => {
      this.setState({ 'cart': response.val() });
    })
  }

  removeItem = id => {
    let cart = this.state.cart;
    firebase.database().ref('cart/' + id).remove();

    //this.setState({ cart });
    firebase.database().ref('cart').on('value', response => {
      this.setState({ 'cart': response.val() });
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Company Products</h1>
        <ProductsTable products={this.state.products} addItem={this.addItem} />
        <h1>Shopping Cart</h1>
        <ProductsCart cart={this.state.cart} removeItem={this.removeItem} />
      </div>
    );
  }
}

export default Commerce;
