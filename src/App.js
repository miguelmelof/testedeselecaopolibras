import React, { Component } from 'react';
import api from './api';
import Fotos from './componentes/Fotos';
import './App.css'
import Banner from './componentes/Fotos/Banner';
import Logo from './componentes/Fotos/Logo';
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
      <div className='pagina'>
        <header><Banner /></header>

        <Logo/> 

        {products.map(product => (
          <li key={product.title}>
            <h2>
              <strong className='titulo'>{product.title}</strong>
              <p className='categoria'>
                 category:
                {product.category}
                </p>
              </h2>      
                <p className='info'> 
                <Fotos id={product.id}/> 
                <label className='desc'>{product.description}</label>
                <br/>
                <label className='preço'>price: {product.price}</label>
                <br/>
                <label className='avaliação'>
                rate:
                {product.rating.rate}
                <br/>
                rating count
                {product.rating.count}
                </label>
                </p>                 
          </li>
        ))}
      </div>
    );
  };
};

export default App;
