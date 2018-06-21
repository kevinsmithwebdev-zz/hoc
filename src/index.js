import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DisplayTheSecret from './DisplayTheSecret';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<DisplayTheSecret />, document.getElementById('root'));
registerServiceWorker();
