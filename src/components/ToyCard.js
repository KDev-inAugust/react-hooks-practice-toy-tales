import React from "react";

function ToyCard({data}) {
  const {id, name, image, likes} = data

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={"toy name"}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
