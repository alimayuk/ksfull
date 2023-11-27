import React, { useEffect, useState } from 'react'
import "./css/BlogDetail.css"
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import DOMPurify from "dompurify";

const BlogDetail = () => {
    const [post,setPost] = useState({});
    const location = useLocation();
    const postId = location.pathname.split("/")[2];

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(`/post/${postId}`);
          setPost(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    }, [postId]);
    
   
  return (
    <div className='BlogDetail'>
        <div className="container">
        <h1
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(post.title),
            }}
          ></h1>
        <img className='image' src={`/upload/${post.photo}`} alt="" />
        <p className='desc' dangerouslySetInnerHTML={{ __html: post.desc }} ></p>
        </div>
    </div>
  )
}

export default BlogDetail