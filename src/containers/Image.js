import React, { Component } from 'react';
import {Loadimage} from '../redux/actions/image';
import {connect} from 'react-redux';

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
  }
}

class Image extends Component {
  
  render() {
    return (
        <div>
          <h1>{this.props.imgdata.status}</h1>
          <button onClick={()=>this.props.loadimage()}> load </button>
          <div>
            {
                this.props.imgdata.result.map((image)=>
                  <p key={image.id}>{image.id}</p>
                )
            }
          </div>
        </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Image);
