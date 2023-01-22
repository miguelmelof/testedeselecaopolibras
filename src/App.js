import React, { Component } from 'react';
import api from './api';
import Fotos from './componentes/Fotos';

class App extends Component {

  state = {
    products: [],
  }

  async componentDidMount() {
    const response = await api.get();
    this.setState({ products: response.data });
  }


  render() {
    const { products } = this.state;

    return (
      <div>
        <h1>Listar os Produtos</h1>
        {products.map(product => (
          <li key={product.title}>
            <h2>
              <strong>{product.title}</strong>
              </h2>  
              <p>      category:
                {product.category}</p>
              <Fotos id={product.id}/>   
              <p>
                <br></br>
                {product.description}
              
                <br></br>
                </p> 
                <p>
                <strong>price: {product.price}</strong>
                <br></br>
                rate:
                {product.rating.rate}
                <br></br>
                rating count:
                {product.rating.count}
                <br>
                </br>
                </p>       
          </li>
        ))}
      </div>
    );
  };
};

export default App;
