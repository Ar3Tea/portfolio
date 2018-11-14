import React, { Component } from 'react';
import * as contentful from 'contentful';
import { Route, Link} from "react-router-dom";
import BlogItem from '../components/BlogItem.js';

class Blog extends React.Component {
  state = {
    posts: []
  }
  client = contentful.createClient({
    space: 's2qh3f012f2f',
    accessToken: '941e69174c753e82bc22d1b32ef4905ca58b32f656a050a557883a99a86d32e2'
  })
  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }
  fetchPosts = () => this.client.getEntries()
  setPosts = response => {
    this.setState({
      posts: response.items
    })
  }

  render() {
    return (
      <div>
        <h1>Coding Blog</h1>
        <br/>
        { this.state.posts.map(({fields}, i) =>
          <BlogItem key={i} {...fields} />
        )}
      </div>
    )
  }
}

export default Blog;
