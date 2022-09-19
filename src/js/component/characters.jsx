import React, {useContext} from "react"  // #1 import useContext de React
import { Link } from "react-router-dom";
import {Context} from "../store/appContext.jsx"; // #2 Traer el context


const Characters = () => {

	return (
        <div className="card container col-4 mx-auto" style={{width: 18 + 'rem'}}>
            <img src={"https://phantom-marca.unidadeditorial.es/c22cf319021ecf8b02d0157bb9bbb817/resize/660/f/webp/assets/multimedia/imagenes/2022/05/25/16535003789582.jpg"} 
                 className="card-img-top" alt="Baby Rigo"/>
            <div className="card-body">
                <h5 className="card-title"> <b>Luke Skywalker </b> </h5> 
                <p className="card-text"> Gender: Male</p>
                <p className="card-text"> Hair Color: None</p>
                <p className="card-text"> Eye Color: Blue</p>
                 <Link to="/learnmore">
                    <a href="#" className="btn btn-primary float-start">Learn More!</a>
				 </Link>

                <p className="fa fa-heart text-danger float-end"></p>
                
            </div>
        </div>
	);
};

export default Characters







