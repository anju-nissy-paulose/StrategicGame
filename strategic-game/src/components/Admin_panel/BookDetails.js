import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
import AdminHome from "../Partials/Admin-header";

const BookDetail = () => {
  const [inputs, setInputs] = useState ({
    name: "",
    description: "",
    price: "",
    author: "",

    image: "",
  });

  const id = useParams().id;
  
  const history = useNavigate();

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/gamebooks/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.inputs));
    };
    console.log(inputs);
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
        
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/GameBooks"));
  };
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div >
          <AdminHome />
          <h2 className="container mt-5" style={{color:"Blue"}}>Edit Product</h2>

            <div className="container mt-5">
            {inputs && (
           <form onSubmit={handleSubmit}>
        <div class="form-group">
            <label for = "name" >Name</label>
            <input type="text" class="form-control" value={inputs.name} onChange={handleChange}  name="name"/>
           
        </div>
        <div class="form-group">
            <label for = "name" >Author</label>
            <input type="text" class="form-control" value={inputs.author} onChange={handleChange}  name="author"/>
           
        </div>
        <div class="form-group">
            <label for = "name" >Description</label>
            <input type="text" class="form-control" value={inputs.description} onChange={handleChange} name="description"/>
           
        </div>
        <div class="form-group">
            <label for = "name" >Price</label>
            <input type="number" class="form-control" value={inputs.price}  onChange={handleChange}  name="price"/>
           
        </div>
        <div class="form-group">
            <label for = "name" >Image</label>
            <input type="text" class="form-control"  value={inputs.image}   onChange={handleChange} name="image"/>
           
        </div>
        <button type="submit" class="btn btn-primary">Update Book</button>
        </form>
       )}
        </div>
        </div>
        
      );

}

export default BookDetail;
