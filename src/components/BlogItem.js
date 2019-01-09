import React from 'react'
import { Link } from "react-router-dom";
import BlogContent from '../components/BlogContent';

const BlogItem = (props) => (
  <div className="box">
    <BlogContent limit={50} {...props }>
      <Link className="level-item button is-small is-link is-outlined" to={{pathname: `/blog${props.path}`, state: { props } }}>Read More</Link>
      {/*<BlogNav date={props.date} to={{pathname: `/blog${props.path}`, state: { props } }} /> */}
    </BlogContent>
  </div>
)
export default BlogItem
