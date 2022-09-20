import React from "react";
import "../../styles/home.css";
// import Characters from "../component/characters.jsx"
import Characters from "../component/characters.jsx"
import Planets from "../component/planets.jsx"

const Home = () => (
	<div>
		<h3 className="text-danger"> Characters</h3>	
		<div className="d-flex mt-5 overflow-auto">
			<Characters/>
		</div>
		<h3 className="text-danger"> Planets</h3>
		{
		// PORQUE NO SE ACOMODAN "Characters y Planets"
		// de la misma manera 
		}
		<div className="container-flex d-flex mt-5">
			<Planets/>
		
		</div>
	</div>
);

export default Home;