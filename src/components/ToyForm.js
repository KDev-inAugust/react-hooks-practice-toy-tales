import React from "react";

function ToyForm({postNewToy, directSetName, directSetImage}) {

 function handleSubmit(e){
  e.preventDefault();
  postNewToy()
 }

 function handleTextOnChange(e){
  directSetName(e.target.value)
 }

 function handleImageOnChange(e){
  directSetImage(e.target.value)
 }


  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-toy-form" >
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleTextOnChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleImageOnChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
