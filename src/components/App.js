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

//-------------donate/DELETE-----

function deleteToy (data){
  console.log("toy id: ", data.id)

  fetch(`http://localhost:3001/toys/${data.id}`, {
    method: "DELETE",
  })
  .then(res=>res.json())
  .then(()=>setNew(data.id))
}
  
//-------------update Likes-------------

function updateLikes (data){
  console.log("like clicked  ", data.likes+1 )
  fetch(`http://localhost:3001/toys/${data.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({likes:data.likes+1}),
  })
  .then((res)=>res.json({}))
  .then((data)=>setNew(data))

}

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm postNewToy={postNewToy} deleteToy={deleteToy} directSetName={setFormName} directSetImage={setImageURL}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer data={data} deleteToy={deleteToy} updateLikes={updateLikes}/>
    </>
  );
}

export default App;
