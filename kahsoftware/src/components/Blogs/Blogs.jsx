import React, { useState, useEffect } from "react";
import "./Blogs.css";
import BlogCard from "../BlogCard/BlogCard";
import axios from "axios";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const post = await axios.get("post/");
      setPosts(post.data);
    };
    fetchData();
  }, []);

  return (
    <div className="Blogs">
      <div className="container">
        <h1 className="blogTitle">Düşünceler ve Yazılar</h1>
        <div className="cards">
  {posts.length > 0 ? (
    posts
      .filter((post) => post.category === "blog")
      .map((post) => (
        <BlogCard item={post} key={post._id} />
      ))
  ) : (
    <p>Henüz bir blog gönderisi bulunmamaktadır.</p>
  )}
</div>
      </div>
    </div>
  );
};

export default Blogs;
