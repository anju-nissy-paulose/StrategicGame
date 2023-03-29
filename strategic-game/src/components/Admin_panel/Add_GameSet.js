
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddGameSet = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    material:"",
    theme:"",
    genre:"",
    noOfPlayers:"",
    colour:"",
    description: "",
    price: "",
    author: "",
    image: "",
  });
  const [checked] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/gamesets", {
        name: String(inputs.name),
        material: String(inputs.material),
        theme: String(inputs.theme),
        genre: String(inputs.genre),
        noOfPlayers: Number(inputs.noOfPlayers),
        colour: String(inputs.colour),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(() => history("/GameSets"));
  };
  return (
      <div >
        <h2 className="container mt-5" style={{color:"Blue"}}>Add Product</h2>
          <div className="container mt-5">
                  <form onSubmit={handleSubmit}>
      <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" value={inputs.name} onChange={handleChange}  name="name"/>
         
      </div>
      <div class="form-group">
        <label for="material">Material</label>
        <input type="text" class="form-control" value={inputs.material} onChange={handleChange}  name="material"/>
       
    </div>
    <div class="form-group">
        <label for="theme">theme</label>
        <input type="text" class="form-control" value={inputs.theme} onChange={handleChange}  name="theme"/>
       
    </div>
    <div class="form-group">
        <label for="genrer"> genre</label>
        <input type="text" class="form-control" value={inputs.genre} onChange={handleChange}  name="genre"/>
       
    </div>
    <div class="form-group">
        <label for="no Of Players">no Of Players</label>
        <input type="text" class="form-control" value={inputs.noOfPlayers} onChange={handleChange}  name="noOfPlayers"/>
       
    </div>
    <div class="form-group">
        <label for="color">Color</label>
        <input type="text" class="form-control" value={inputs.colour} onChange={handleChange}  name="colour"/>
       
    </div>
    
    <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" value={inputs.description} onChange={handleChange} name="description"/>
       
    </div>
    <div class="form-group">
        <label for="price">Price</label>
        <input type="number" class="form-control" value={inputs.price}  onChange={handleChange}  name="price"/>
       
    </div>
    <div class="form-group">
        <label for="image">Image</label>
        <input type="text" class="form-control"  value={inputs.image}   onChange={handleChange} name="image"/>
       
    </div>
      <button type="submit" class="btn btn-primary">Add Book</button>
</form>
      </div>
      </div>
      
    );

};
  export default AddGameSet;