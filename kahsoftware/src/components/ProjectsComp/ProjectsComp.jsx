import React, { useEffect, useState } from "react";
import "./ProjectsComp.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import axios from "axios";
const ProjectsComp = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const post = await axios.get("post/");
      setPosts(post.data);
    };
    fetchData();
  }, []);
  return (
    <div className="ProjectsComp">
      <div className="container">
        <div className="projectcards">
          {posts.length > 0 ? (
            posts
              .filter((post) => post.category === "proje")
              .map((post) => <ProjectCard item={post} key={post._id}  />)
          ) : (
            <p>Henüz bir blog gönderisi bulunmamaktadır.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsComp;
