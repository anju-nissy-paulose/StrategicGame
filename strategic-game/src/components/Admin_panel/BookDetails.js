import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const GameBookDetail = () => {
  const [inputs, setInputs] = useState();
  const id = useParams().id;
 // const [checked, setChecked] = useState(false);
  const history = useNavigate();
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/gamebooks/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.gamebook));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/gamebooks/${id}`, {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        //available: Boolean(checked),
      })
      .then((res) => res.data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/gamebook"));
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
        <label for="author">Author</label>
        <input type="text" class="form-control" value={inputs.author} onChange={handleChange}  name="author"/>
       
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
    <button type="submit" class="btn btn-primary">Update Book</button>
</form>
)}
    </div>
    </div>
    
  );

};
export default GameBookDetail;