import React from "react";
import { useParams } from "react-router-dom";

const EachNews = () => {
  const { id } = useParams();

  return (
    <div className="w-full h-[100vh] p-9">
      each news
      {id}
      <p>this is the each news</p>
    </div>
  );
};

export default EachNews;
