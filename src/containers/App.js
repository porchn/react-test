import React, { Component } from 'react';
import './App.css';
import Counter from './Counter'
import Image from './Image';
import Header from './Header'


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header/>
        <Counter/>
        <Image/>
      </div>
    );
  }
}

export default (App);
