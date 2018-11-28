import React from 'react';
import ReactDOM from 'react-dom';
import './Css/index.css';
import App from './Componente/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
