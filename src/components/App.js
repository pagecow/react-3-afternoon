import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Post from './Post/Post'
import Header from './Header/Header';
import Compose from './Compose/Compose';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };

    this.updatePost = this.updatePost.bind( this );
    this.deletePost = this.deletePost.bind( this );
    this.createPost = this.createPost.bind( this );
  }
  
  componentDidMount() {
    axios.get('practiceapi.devmountain.com/api/posts')
    .then(response => {
      this.setState({
          posts: response.data
        })
        alert.success('Success!')
    })
    .catch(error => {
      console.log(error)
    })
  }

  updatePost(id, text) {
    axios.put(`practiceapi.devmountain.com/api/posts?id=${ id }`, {text})
    .then(response => {
      this.setState({
        posts: response.data
      })
      alert.success('Success!')
    })
    .catch(err => {
      console.log(err)
    })
  }

  deletePost() {

  }

  createPost() {

  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">

          <Compose />

          {
            posts.map(post => {
              <Post 
                key={post.id}
                text={post.text}
                date={post.date}
                updatePostFn={this.updatePost}
              />
            })
          }
          
        </section>
      </div>
    );
  }
}

export default App;
