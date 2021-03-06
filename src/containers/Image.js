import React, { Component } from 'react';
import {Loadimage,Showimage} from '../redux/actions/image';
import {connect} from 'react-redux';
import Imagelist from '../components/Imagelist';


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
    showimage:(image)=>{
      dispatch(Showimage(image));
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
