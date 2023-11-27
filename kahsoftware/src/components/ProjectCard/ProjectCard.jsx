import React from "react";
import "./ProjectCard.css";
import { Link } from "react-router-dom";

const ProjectCard = ({ item }) => {
  return (
    <div
      className="ProjectCard"
      style={{ backgroundImage: `url(/upload/${item?.photo})` }}
    >
      <div className="item">
        <h2>{item.title}</h2>
        <Link className="siteLink" to={item.siteLink}>
          Ziyaret Et
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
