import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({data, deleteToy}) {

  return (
    <div id="toy-collection">{
      data.map((index)=>{return <ToyCard key={index.id} data={index} deleteToy={deleteToy}/>})

    }</div>
  );
}

export default ToyContainer;
