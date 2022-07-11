import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({data}) {

  console.log('data in toyContainer', data)
  

  return (
    <div id="toy-collection">{
      data.map((index)=>{return <ToyCard id={index.id} data={index}/>})

    }</div>
  );
}

export default ToyContainer;
