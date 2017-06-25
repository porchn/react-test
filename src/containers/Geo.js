import React, { Component } from 'react';
import {connect} from 'react-redux';
import { setLocale } from 'react-redux-i18n';
import './App.css';
import Counter from './Counter'
import Image from './Image';
import Header from './Header'

const mapStateToProps=(state)=>{
  return {
    i18n:state.i18n,
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    switchlang:(lang)=>{
      dispatch(setLocale(lang));
    }
  }
}

class Geo extends Component {
  
  constructor(props,dispatch) {
    super(props);
  }

  componentWillMount(){
    this.props.switchlang('en');
  }

  componentDidMount(){
    this.props.switchlang('th');
  }

  render() {
    return (
      <div className='App'>
        <div>
          KUY Geo asdfasd
        </div>
        <Header/>
        <Counter/>
        <Image/>
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (Geo);
