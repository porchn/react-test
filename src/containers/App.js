import React, { Component } from 'react';
import './App.css';
import Counter from './Counter'
import Image from './Image';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Counter/>
        <Image/>
      </div>
    );
  }
}

export default (App);
