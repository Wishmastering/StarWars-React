import React, {useEffect, useState} from "react"; 
import "../../styles/home.css";
import {useParams} from "react-router-dom"


const Learnmore = () => {
	const params = useParams();
	console.log(params);
	const {character, setCharacter} = useState("")
	useEffect( ()=>{
		fetch("https://www.swapi.tech/api/people/"+params.id)
		.then(res => res.json())
		.then(data => setCharacter(data))
		.catch(err => err);
		console.log(character)
	}, [] )
	

	return(
	<div>
		<div className="row">
			<div className="col-4" style={{width: 19 + 'rem'}}>
			<img src={"https://starwars-visualguide.com/assets/img/characters/"+ params.id +".jpg"} 
				alt="Tatooine" className="container"/>
			</div>
			<div className="col-2"></div>
			<div className="col-6">
				<p>Hola</p>
			</div>
		</div>
		<hr className="hrStyle" style={{color: 'red'}}/>
		<div className="row">
			<div className="col-2 fontRed text-center">Name
				<div className="text-center"></div>
			</div>
			<div className="col-2 text-center"> Birth Year
				<div>19BBY</div>
			</div>
			<div className="col-2 text-center"> Gender
				<div className="text-center">Male</div>
			</div>
			<div className="col-2 text-center"> Height
				<div className="text-center">172</div>
			</div>
			<div className="col-2 text-center"> Skin Color
				<div className="text-center">Fair</div>
			</div>
			<div className="col-2 text-center"> Eye Color
				<div className="text-center">Blue</div>
			</div>
			

		</div>
	</div>
);}

export default Learnmore;