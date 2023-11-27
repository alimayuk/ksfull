import React from "react";
import "./BlogCard.css";
import { Link } from "react-router-dom";
const BlogCard = ({ item }) => {
  return (
    <Link className="BloaagCard" to={`/blogs/${item._id}`}>
     <div className="picture" style={{ backgroundImage: `url(/upload/${item?.photo})` }}>
</div>
        <p className="ad">{item.title}</p>
    </Link>
  );
};

export default BlogCard;
