import React from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import Header from './Header';

class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      posts: []
    };
  }

  componentWillMount() {
    // alert( 'here' );
    // this runs right before the <App> is rendered
    console.log( `componentWillMount: ${this.state.posts}` );
  }

  componentDidMount() {
    let th = this;
    axios.get(this.props.source)
      .then(function(result) {
        th.setState({
            posts: result.data
          });
        console.log(result.data); 
        });
  }

  render() {
    return (
      <div>
        <Header title="My Site" />
        <div className="post-wrapper">
          testing: 
          <ul>
            {this.state.posts.map(
              function(post) {
                return (
                  <li key="{post.ID}">{post.title.rendered} by: {post._embedded.author[0].name}</li>
                )
              }
            )}

          </ul>
			  </div>
      </div>
    ) 
  }
}

App.propTypes = {
  source: PropTypes.string.isRequired
};

export default App;