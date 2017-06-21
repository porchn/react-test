import React, { Component } from 'react';
import {connect} from 'react-redux';
import { setLocale } from 'react-redux-i18n';
import './Header.css'
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


class Header extends Component {
  render() {
    return (
      <div className='image'> 
          <div><span className={this.props.i18n.locale === 'en' ?'active':'noactive'} onClick={()=>this.props.switchlang('en')}>en</span> / 
          <span className={this.props.i18n.locale === 'th' ?'active':'noactive'} onClick={()=>this.props.switchlang('th')}>ไทย</span></div>
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
