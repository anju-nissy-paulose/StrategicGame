import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Details from "./BookDetails"
//import "./Book.css";
const Book = (props) => {
  const history = useNavigate();
  const { _id, name, author, description, price, image } = props.book;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/gamebooks/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/gamebooks"));
  };
 
  
  return (
    <div >
 
         
      
  <table class="table">
  <thead>
      <tr>
              <th  scope="col"></th>
              <th  scope="col"></th>
              <th  scope="col"></th>
              <th  scope="col"></th>
              <th  scope="col"></th>
              <th  scope="col"></th>
            </tr>
          </thead>

      
      <tbody>
      <tr>
        <td >{name}</td>
        <td>{author}</td>
        <td >{description}</td>
        <td >{price} </td>
        <td><img src={image} width={80} height={80} alt={name} /></td>
        <td className="btn btn-primary mt-4" ><a href="/Details"> View</a></td> &nbsp;&nbsp;&nbsp;
        <td className="btn btn-primary mt-4" LinkComponent={Link} to={`/gamebooks/:id`} >Edit</td> &nbsp;&nbsp;&nbsp;
        

        <td className="btn btn-success  mt-4" onClick={deleteHandler}>Delete</td>

        </tr>
        </tbody>
        </table>
        </div>
        

              
        
   
  );
};

export default Book;
