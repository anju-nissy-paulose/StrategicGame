
  import axios from "axios";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import AdminHome from "../Partials/Admin-header";
  const AddGameBook = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
      name: "",
      description: "",
      price: "",
      author: "",
  
      image: "",
    });
    const [checked, setChecked] = useState(false);
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    
    };
  
    const sendRequest = async () => {
      await axios
        .post("http://localhost:5000/gamebooks", {
          name: String(inputs.name),
          author: String(inputs.author),
          description: String(inputs.description),
          price: Number(inputs.price),
          image: String(inputs.image),
          available: Boolean(checked),
        })
        .then((res) => res.data);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs, checked);
      sendRequest().then(() => history("/GameBooks"));
    };


   
    return (
        <div >
          <AdminHome />
          <h2 className="container mt-5" style={{color:"Blue"}}>Add Product</h2>
            <div className="container mt-5">
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
        <button type="submit" class="btn btn-primary">Add Book</button>
</form>
        </div>
        </div>
        
      );
  
  };
    export default AddGameBook;