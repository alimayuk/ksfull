import React, { useEffect, useState } from 'react'
import "./css/BlogDetail.css"
import {useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import DOMPurify from "dompurify";
import {Helmet} from "react-helmet-async";
import { BASE_URL } from '../baseUrl';

const BlogDetail = () => {
    const [post,setPost] = useState({});
    const location = useLocation();
    const postId = location.pathname.split("/")[2];
    const navigate = useNavigate();
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(`${BASE_URL}/post/${postId}`);
          setPost(res.data);
        } catch (err) {
          console.log(err);
          navigate("*")
        }
      };
      fetchData();
    }, [postId,navigate]);
      
   
  return (
    <div className='BlogDetail'>
      <Helmet>
        <title> {`${post.title} | KAH YAZILIM`}</title>
        <meta name="description" content='anasayfa desc' />
      </Helmet>
        <div className="container">
        <h1
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(post.title),
            }}
          ></h1>
        <img className='image' src={`/upload/${post.photo}`} alt="blog detay fotoğrafı" />
        <p className='desc' dangerouslySetInnerHTML={{ __html: post.desc }} ></p>
        </div>
    </div>
  )
}

export default BlogDetail