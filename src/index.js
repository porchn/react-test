import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store/configStore'
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <div>
            <App />
        </div>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
