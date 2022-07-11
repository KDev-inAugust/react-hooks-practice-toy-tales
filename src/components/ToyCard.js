import React from "react";

function ToyCard({data, deleteToy, updateLikes}) {
  const {id, name, image, likes} = data

  function handleDonate (){
    deleteToy(data)
  }

  function handleLikeClick (){
    updateLikes(data);
    console.log("data likes", data.likes)
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={"toy name"}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={handleLikeClick} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDonate} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
