import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store/configStore'
import App from './containers/App';
//import Geo from './containers/Geo';

import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { AppContainer } from 'react-hot-loader';


// ReactDOM.render(
//     <Provider store={store}>
//         <div>
//             <App />
//         </div>
//     </Provider>, 
//     document.getElementById('root')
// );

const render=()=>{
  ReactDOM.render(
    <Provider store={store}>
        <AppContainer>
          <App/>
        </AppContainer>
    </Provider>, 
    document.getElementById('root')
  )
}

render();

if (module.hot) {
  module.hot.accept('./containers/App', () => { render() })
}

registerServiceWorker();