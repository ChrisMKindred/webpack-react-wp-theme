import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
// import Header from './components/Header';

import '../scss/base.scss';

if ( document.querySelector('#app') ) {
    ReactDOM.render(
        <App source="https://test.dev/wp-json/wp/v2/posts/?_embed&per_page=10&author=1,2"/>,
        document.querySelector('#app')
    );
}
