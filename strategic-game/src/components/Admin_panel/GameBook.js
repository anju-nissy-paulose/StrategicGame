import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
//import "./Book.css";
const Book = (props) => {
  const history = useNavigate();
  const { _id, name, author, description, price, image } = props.book;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/books/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/books"));
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
        <td>{name}</td>
        <td>{author}</td>
        <td>{description}</td>
        <td>{price}</td>
        <td><img src={image} width={80} height={80} alt={name} /></td>
        <td className="btn btn-primary">Edit</td>

        </tr>
        </tbody>
        </table>
    </div>
  );
};

export default Book;
