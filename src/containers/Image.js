import React, { Component } from 'react';
import {Loadimage} from '../redux/actions/image';
import {connect} from 'react-redux';
import Imagelist from '../components/Imagelist';
import { setLocale } from 'react-redux-i18n';

const mapStateToProps=(state)=>{
  return {
    imgdata:state.images,
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    loadimage:()=>{
      dispatch(Loadimage());
    },
    switchlang:(lang)=>{
      dispatch(setLocale(lang));
    }
  }
}

class Image extends Component {
  render() {
    return (
      <div className='image'>
        <Imagelist data={this.props}/>
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Image);
