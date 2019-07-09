import React from 'react';
import * as contentful from 'contentful';
import { Route, Link, Switch} from "react-router-dom";
import Banner from '../components/Banner.js';
import BlogItem from '../components/BlogItem.js';
import Home from '../components/Home.js';
import PageHeader from '../components/PageHeader.js';

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
        <Banner />
          <PageHeader color="is-info" title="Coding Blog">
            Your standard <strong>programming</strong> blog, albeit, probably not very good, but I will at least try to keep it entertaining. This blog is a chronological mix of random posts on JavaScript, HTML, CSS, Ruby on Rails, Liquid, PHP, APIs, React, Functional Programming, and more, as well as my <strong>project walkthroughs</strong>.
          </PageHeader>
        <br/>
          <Link to="/" className="App-link"><h3><code>Back Home</code></h3></Link>
        { this.state.posts.map(({fields}, i) =>
          <BlogItem key={i} {...fields} />
        )}
      <Switch>
        <Route exact path="/home" component={Home} />
      </Switch>
      </div>
    )
  }
}

export default Blog;
