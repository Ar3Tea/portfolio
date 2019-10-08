import React from 'react'
import PageContent from './../components/PageContent'
import BlogNav from '../components/BlogNav'
import BlogContent from '../components/BlogContent'

const BlogPost = ({ location: { state: { props } }}) => (
  <PageContent>
    <BlogNav date={props.date} to="/blog" />
    <BlogContent {...props } />
    <BlogNav date={props.date} to="/blog" />
  </PageContent>
)
export default BlogPost
