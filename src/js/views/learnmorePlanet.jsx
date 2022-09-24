import React, {useEffect, useState} from "react"; 
import "../../styles/home.css";
import {useParams} from "react-router-dom"


const LearnmorePlanet = () => {
	const params = useParams();
	console.log(params);
	const [planet, setPlanet] = useState([]);
	useEffect( ()=>{
		fetch('https://www.swapi.tech/api/planets/'+params.id)
		.then((response) => response.json())
		.then((data) => setPlanet(data.result.properties));
		// .catch((err) => err);
		
	}, [] )

	console.log(planet);
	

	return(
	<div>
		<div className="row">
			<div className="col-4" style={{width: 19 + 'rem'}}>
			<img src={"https://starwars-visualguide.com/assets/img/planets/"+ params.id +".jpg"} 
				alt="Tatooine" className="container"/>
			</div>
			<div className="col-2"></div>
			<div className="col-6">
				<p> </p>
			</div>
		</div>
		<hr className="hrStyle" style={{color: 'red'}}/>
		<div className="row">
			<div className="col-2 fontRed text-center">{planet.name}
				<div className="text-center"></div>
			</div>
			<div className="col-2 text-center"> Diameter
				<div>{planet.diameter}</div>
			</div>
			<div className="col-2 text-center"> Climate
				<div className="text-center">{planet.climate}</div>
			</div>
			<div className="col-2 text-center"> Population
				<div className="text-center">{planet.population}</div>
			</div>
			<div className="col-2 text-center"> Terrain
				<div className="text-center">{planet.terrain}</div>
			</div>
			<div className="col-2 text-center"> Gravity
				<div className="text-center">{planet.gravity}</div>
			</div>
			

		</div>
	</div>
);}

export default LearnmorePlanet;