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

  timer() {
      this.getPosts();
      //console.log('runing timer');
  }

  componentWillMount() {
    // this runs right before the <App> is rendered
    clearInterval(this.intervalId);
  }

  componentDidMount() {
    this.getPosts();
    this.intervalId = setInterval(this.timer.bind(this), 10000);
  }

  getPosts(){
    let th = this;
    axios.get(this.props.source)
      .then(function(result) {
        th.setState({
            posts: result.data
          });
        });
        // console.table(this.state.posts);
  }


  render() {
    return (
      <div>
        <Header title="Testing React" />
        <div className="post-wrapper">
          <ul>
            {this.state.posts.map(
              function(post) {
                return ( 
                  <div className='post' key={post.id.toString()}>
                    <h2><a href={post.link}>{post.title.rendered}</a> <span className='lead'>by: {post._embedded.author[0].name}</span></h2>
                    <p dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></p>
                  </div>
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