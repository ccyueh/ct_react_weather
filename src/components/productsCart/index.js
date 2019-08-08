import React from 'react';
import './index.css';

function ProductsCart(props) {
  return (
    <div className="row">
      <div className="col-md-12">
        <table className="table-dark table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Remove Product</th>
            </tr>
          </thead>
          <tbody>
            {
              props.cart &&
                Object.entries(props.cart).map( product =>
                  <tr key={product[0]}>
                    <td>{product[1].name}</td>
                    <td>${product[1].price}</td>
                    <td>
                      <button className="btn btn-danger"
                      onClick={() => props.removeItem(product[0])}>
                        Remove from Cart
                      </button>
                    </td>
                  </tr>
                )
            }
            <tr id="total">
              <td colSpan='3'>
                <b>Total:</b> ${props.cart &&
                  Object.values(props.cart).reduce((s,a) => s + a.price, 0).toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductsCart;
