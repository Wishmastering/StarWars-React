import React from "react"
import { Link } from "react-router-dom";

const Planets = () => {
	return (
        <div className="card container-fluid" style={{width: 19 + 'rem'}}>
            <img src="https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg" 
            className="card-img-top" alt="Tatooine"/>
            <div className="card-body">
                <h5 className="card-title">Tatooine</h5> 
                <p className="card-text">Population: 5 000 000</p>
                <p className="card-text">Terrain: Desert</p>
                <Link to="/learnmore">
                    <a href="#" className="btn btn-primary float-start">Learn More!</a>
                </Link>

                    <p className="fa fa-heart text-danger float-end"></p>

            </div>
        </div>
	);
};

export default Planets







