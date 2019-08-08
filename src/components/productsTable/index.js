import React from 'react';
import './index.css';

function ProductsTable(props) {
  return (
    <div className="row">
      <div className="col-md-12">
        <table className="table-dark table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Add Product</th>
            </tr>
          </thead>
          <tbody>
            {
              props.products &&
                props.products.map( product =>
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>${product.price}</td>
                    <td>
                      <button className="btn btn-success"
                      onClick={() => props.addItem(product.id)}>
                        Add to Cart
                      </button>
                    </td>
                  </tr>
                )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductsTable;
