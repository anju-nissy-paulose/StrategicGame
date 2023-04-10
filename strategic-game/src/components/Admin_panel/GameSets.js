import React ,{ useEffect, useState } from "react";
import axios from "axios";
//import GameSet from "./GameSet";
import AdminHome from "../Partials/Admin-header";
import { Link, useNavigate } from "react-router-dom";

const URL = "http://localhost:5000/gamesets";

const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
  };
  const GameSets = () => {
    const [gamesets, setGame] = useState();
    useEffect(() => {
      fetchHandler().then((data) => setGame(data.gamesets));
    }, []);
    console.log(gamesets);


  const history = useNavigate();
  //const{_id,name,description,price, material,theme,genre,noOfPlayers,colour,image}= props.gameset || {};
  const deleteHandler = async (id) => {
    await axios
     .delete(`http://localhost:5000/gamesets/${id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/gamesets"));
  };

    return (
      <div>  
        <AdminHome /> 
          <div className="container  ml-5 mt-5">
            <div className="row"> 
            <a href="/addGameSet" className="btn btn-success">Add Product </a>
            </div>
          </div>

         <div className="cotainer ml-8 mt-5" >
         
         <table className="table ml-8 ">
      
      <thead className="thead-dark">
                <tr >
                  <th scope="col" >Name</th>
                  <th scope="col" >Material</th>
                  <th scope="col" >Theme</th>
                  <th scope="col" >Genre</th>
                  <th scope="col" >No Of Players</th>
                  <th scope="col" >Colour</th>
                  <th scope="col" >Description</th>
                  <th scope="col" >Price</th>
                  <th scope="col" >Image</th>
                  <th scope="col" >Modify Customer</th> 
                </tr>
              </thead>           
        
        <tbody>
         {gamesets &&
            gamesets.map((gameSet , i) => (
              <tr scope="row"  key={i}>
     
             
             <td >{gameSet.name}</td>
              <td>{gameSet.material}</td>
              <td >{gameSet.theme}</td>
              <td >{gameSet.genre}</td>
              <td >{gameSet.noOfPlayers}</td>
              <td >{gameSet.colour}</td>
              <td >{gameSet.description}</td>
              <td >${gameSet.price} </td>
              <td><img src={gameSet.image} width={80} height={80} alt={gameSet.name} /></td>
              <td className="btn btn-primary mt-4" > 
                     < Link style={{color:'white'}} LinkComponent={Link} to={`/gameBooks/:${gameSet._id}`}>Edit </Link> </td> &nbsp;&nbsp;&nbsp;

              <td className="btn btn-success  mt-4" onClick={() => deleteHandler(gameSet._id)}>Delete</td>
      </tr>
            ))}
        
     
        </tbody> 
       </table>
        </div>
      </div>
    );
    
    };
    
export default GameSets;