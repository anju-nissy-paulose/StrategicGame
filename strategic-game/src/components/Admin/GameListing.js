import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const GameListing = () => {
    const [games, setGames] = useState(null);
    const navigate = useNavigate();

    const LoadEdit = (id) => {
        navigate("/A_Puzzle/edit/" + id);
    }

    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:5000/api/puzzles/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }


    useEffect(() => {
        fetch("http://localhost:5000/api/puzzles").then((res) => {
            return res.json();
        }).then((resp) => {
            setGames(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])

    return (
        <div className="A-game-container">
            <div className="card">
                <div className="card-title">
                    <h2>Puzzle Games</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="/A_Puzzle/create" className="btn btn-success">Add New (+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>                               
                                <td>Image</td>
                                <td>Name</td>
                                <td>Price</td>
                                <td>Rating</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>

                            {games &&
                                games.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.image}</td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.rating}</td>
                                        <td><a onClick={() => { LoadEdit(item._id) }} className="btn btn-success">Edit</a>
                                            <a onClick={() => { Removefunction(item._id) }} className="btn btn-danger">Remove</a>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}

export default GameListing;