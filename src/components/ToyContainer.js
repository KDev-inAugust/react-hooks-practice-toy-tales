import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({data, deleteToy, updateLikes}) {

  return (
    <div id="toy-collection">{
      data.map((index)=>{return <ToyCard key={index.id} data={index} deleteToy={deleteToy} updateLikes={updateLikes}/>})

    }</div>
  );
}

export default ToyContainer;
