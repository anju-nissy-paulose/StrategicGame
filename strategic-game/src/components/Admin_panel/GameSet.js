import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
//import "./Book.css";
const GameSet = (props) => {
  const history = useNavigate();
  const{_id,name,description,price, material,theme,genre,noOfPlayers,colour,image}= props.gameset || {};
  const deleteHandler = async () => {
    await axios
     .delete(`http://localhost:5000/gamesets/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/gamesets"));
  };
 
  
  return (
    <div >
 
         
      
  <table className="table ml-8 ">
      
  <thead className="thead-dark"style={{paddingLeft:"15em"}}>
            <tr >
              <th scope="col" style={{paddingRight:"8em"}}>Name</th>
              <th scope="col" style={{paddingRight:"5em"}}>Material</th>
              <th scope="col" style={{paddingRight:"25em"}}>Theme</th>
              <th scope="col" style={{paddingRight:"1em"}}>No Of Players</th>
              <th scope="col" style={{paddingRight:"5em"}}>Colour</th>
              <th scope="col" style={{paddingRight:"5em"}}>Description</th>
              <th scope="col" style={{paddingRight:"5em"}}>Price</th>
              <th scope="col" style={{paddingRight:"5em"}}>Image</th>
              <th scope="col" style={{paddingRight:"5em"}}>Modify Customer</th> 
            </tr>
          </thead>
          <tbody>
            <tr>
       
            
              <td >{name}</td>
              <td>{material}</td>
              <td >{theme}</td>
              <td >{genre}</td>
              <td >{noOfPlayers}</td>
              <td >{colour}</td>
              <td >{description}</td>
              <td >{price} </td>
              <td><img src={image} width={80} height={80} alt={name} /></td>
              <td className="btn btn-primary mt-4" LinkComponent={Link} to={`/gamesets/:id`} >Edit</td> &nbsp;&nbsp;&nbsp;

              <td className="btn btn-success  mt-4" onClick={deleteHandler}>Delete</td>

        </tr>
      </tbody>
        </table>
        </div>
        

              
        
   
  );
};

export default GameSet;
