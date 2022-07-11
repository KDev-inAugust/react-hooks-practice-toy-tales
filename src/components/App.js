import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [data, setData] = useState([])
  const [formName, setFormName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [newT, setNew] = useState({})

  useEffect(()=>
  {
    fetch('http://localhost:3001/toys')
    .then(res=>res.json())
    .then(data=>setData(data))
  },[newT])


  const newToy = {
    name:formName,
    image:imageURL,
    likes:0
  }
  console.log("direct set NAME  (in App) : ", formName)

  console.log("direct set IMAGE (in App) : ", imageURL)

  //---------post new toy to Server--------------

function postNewToy (){
console.log("post new toy triggered")
fetch('http://localhost:3001/toys', {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newToy),
})
.then((res)=>res.json())
.then(data=>setNew(data))
}
  


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
