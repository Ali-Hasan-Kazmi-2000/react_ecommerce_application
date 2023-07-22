import React from 'react'
import data from "../data/products";
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="container home">
            <div className="row">
                {
                    data.map((d) => (
                        <div key={d.id} className="col-md-3 border py-2 text-center my-5">
                            <img src={d.image} width="100%" alt={d.id} />
                            <Link className="btn btn-warning" to={`/Customize/${d.id}`}>Customize</Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home;