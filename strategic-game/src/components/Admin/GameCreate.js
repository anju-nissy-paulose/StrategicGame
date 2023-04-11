import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const GameCreate = () => {

    const [name, namechange] = useState("");
    const [slug, slugchange] = useState("");
    const [category, categorychange] = useState("");
    const [image, imagechange] = useState("");
    const [price, pricechange] = useState(0);
    const [rating, ratingchange] = useState(0);
    const [description, descriptionchange] = useState("");
    const [link, linkchange] = useState("");


    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const gamedata = { name, slug, category, image, price, rating, description, link };


        fetch("http://localhost:5000/api/puzzles", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(gamedata)
        }).then((res) => {
            alert('Saved successfully.')
            navigate('/A_Puzzle_List');
        }).catch((err) => {
            console.log(err.message)
        })

    }

    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2>Game Create</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input required value={name} onChange={e => namechange(e.target.value)} className="form-control" placeholder="Unique Value"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Slug</label>
                                            <input value={slug} onChange={e => slugchange(e.target.value)} className="form-control" placeholder="Unique Value"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Category</label>
                                            <input value={category} onChange={e => categorychange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Image</label>
                                            <input value={image} onChange={e => imagechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Price</label>
                                            <input value={price} onChange={e => pricechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Rating</label>
                                            <input required value={rating} onChange={e => ratingchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Description</label>
                                            <input required value={description} onChange={e => descriptionchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Link</label>
                                            <input required value={link} onChange={e => linkchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>


                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to="/A_Puzzle_List" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default GameCreate;