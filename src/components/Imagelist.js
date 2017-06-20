import React, { Component } from 'react';
import ReactDOM from 'react-dom';
var Translate = require('react-redux-i18n').Translate;
//var Localize = require('react-redux-i18n').Localize;

export default class Imagelist extends Component {
    render() {
        const {imgdata:{status,result},loadimage,switchlang}=this.props.data;
        return (
            <div>
                <div><span onClick={()=>switchlang('en')}>en</span> / <span onClick={()=>switchlang('th')}>th</span></div>
            <h1>{status} <Translate value="application.title"/></h1>
            <button onClick={()=>loadimage()}> load </button>
            <div>
                <div id='showimage' className='showimage' style={{height:"200px",background: "#eee"}}></div>
                {
                    result.map((image)=>
                    <p key={image.id} onClick={()=>this.showImage(image)} style={{cursor:'pointer'}}>{image.id}</p>
                    )
                }
            </div>
            </div>
        );
    }

    showImage(image){
        ReactDOM.render(
                <div>
                    <img key ={image.id} src={image.link} style={{height:"200px"}} alt={image.name} />
                </div>,
            document.getElementById('showimage')
        );
    }
}