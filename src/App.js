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
            <h2 className='topo'>
              <strong className='titulo'>{product.title}</strong>
              <br/>
              <br />
              <label className='preço'>PRICE: $ {product.price}</label>
              <br/>
              <p className='categoria'>
                 category:
                {product.category}
                </p>
              </h2>      

                <p className='info'> 
                <Fotos id={product.id}/> 
                <label className='desc'>{product.description}</label> 
                <br/>
                <br/>
                <br/>
                <br/>
                <p> <label className='avaliação'>
                ★rate:
                <strong>{product.rating.rate}</strong>
                <br/>
                count: 
                <strong>{product.rating.count}</strong>
                </label>
                </p>
                </p>            
          </li>
        ))}
        <Banner />
      </div>
    );
  };
};

export default App;
