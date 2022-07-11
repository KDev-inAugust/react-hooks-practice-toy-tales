import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [data, setData] = useState([])
  const [formName, setFormName] = useState("");
  const [imageURL, setImageURL] = useState("");

  useEffect(()=>
  {
    fetch('http://localhost:3001/toys')
    .then(res=>res.json())
    .then(data=>setData(data))
  },[])


  const newToy = {
    name:formName,
    image:imageURL,
    likes:0
  }

  //---------grab form input--------------

function postNewToy (){
console.log("post new toy triggered")
}
  
console.log("direct set NAME  (in App) : ", formName)

console.log("direct set IMAGE (in App) : ", imageURL)

//------------------------------------------
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm postNewToy={postNewToy} directSetName={setFormName} directSetImage={setImageURL}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer data={data}/>
    </>
  );
}

export default App;
