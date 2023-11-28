import React from 'react'
import Blogs from '../components/Blogs/Blogs'
import {Helmet} from "react-helmet-async";

const BlogsPage = () => {
  return (
    <div>
      <Helmet>
        <title> Yazılar | KAH YAZILIM </title>
        <meta name="description" content='İşletmelere dijital trendlerle ilgili özel içerikler sunuyoruz. Web, yazılım, e-ticaret, SEO ve danışmanlık konularında güncel bilgiler paylaşıyoruz.' />
        <link rel='canonical' href='/blogs' />
      </Helmet>
      <Blogs/>
    </div>
  )
}

export default BlogsPage