import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const GameSetDetail = () => {
  const [inputs, setInputs] = useState();
  const id = useParams().id;
 // const [checked, setChecked] = useState(false);
  const history = useNavigate();
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/gamesets/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.gameset));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/gamesets/${id}`, {
        name: String(inputs.name),
        material: String(inputs.material),
        theme: String(inputs.theme),
        genre: String(inputs.genre),
        noOfPlayers: Number(inputs.noOfPlayers),
        colour: String(inputs.colour),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        //available: Boolean(checked),
      })
      .then((res) => res.data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/gameset"));
  };
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="container mt-5">
        <div>
        {inputs && (
        <form onSubmit={handleSubmit}>
    <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" value={inputs.name} onChange={handleChange}  name="name"/>
       
    </div>
    <div class="form-group">
        <label for="author">Material</label>
        <input type="text" class="form-control" value={inputs.material} onChange={handleChange}  name="author"/>
       
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
        <label for="players">no Of Players</label>
        <input type="text" class="form-control" value={inputs.noOfPlayers} onChange={handleChange}  name="players"/>
       
    </div>
    <div class="form-group">
        <label for="color">Color</label>
        <input type="text" class="form-control" value={inputs.colour} onChange={handleChange}  name="color"/>
       
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
    <button type="submit" class="btn btn-primary">Update Sets</button>
</form>
)}
    </div>
    </div>
    
  );

};
export default GameSetDetail;