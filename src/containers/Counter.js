import React, { Component } from 'react';
import {Inc,Dec} from '../redux/actions/counter';
import {connect} from 'react-redux';

const mapStateToProps=(state)=>{
  return {
    number:state.counter.num,
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    Inc : (num)=>{
      dispatch(Inc(num));
    },
    Dec : (num)=>{
      dispatch(Dec(num));
    }
  }
}

class Counter extends Component {
  inc(){
    this.props.Inc(1);
  }

  dec(){
    this.props.Dec(1);
  }

  render() {
    return (
        <div>
          <h1>{this.props.number}</h1>
          <button onClick={() => this.dec()}> - </button>
          <button onClick={() => this.inc()}> + </button>
        </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
