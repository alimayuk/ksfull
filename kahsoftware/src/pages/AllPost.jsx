import React, { useEffect, useState } from "react";
import "./css/AllPost.css";
import axios from "axios";
import AdminCard from "../components/AdminCard/AdminCard";

const AllPost = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const post = await axios.get("/post/");
      setPosts(post.data);
    };
    fetchData();
  }, []);

  return (
    <div className="AllPost">
      <div className="container">
        <h1>Tüm Paylaşımlar</h1>
        <div className="allPost">
          {posts.length > 0 ? (
            posts.map((item) => (
              <AdminCard
                key={item._id}
                item={item}
              />
            ))
          ) : (
            <p>Henüz bir blog gönderisi bulunmamaktadır.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllPost;
