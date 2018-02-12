import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
// import Header from './components/Header';

import '../scss/base.scss';


ReactDOM.render(
    <App source="https://test.dev/wp-json/wp/v2/posts/?_embed&per_page=30&author=1"/>,
    document.querySelector('#app')
);
