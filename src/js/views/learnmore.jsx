import React from "react";
import "../../styles/home.css";

{
	// PORQUE NO ME SIRVE EL STYLE DEL "hr"
}

const Learnmore = () => (
	<div>
		<div className="row">
			<div className="col-4" style={{width: 19 + 'rem'}}>
				<img src="https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg" 
				alt="Tatooine"/>
			</div>
			<div className="col-2"></div>
			<div className="col-6">
				<p>Lorem, ipsum dolor sit amet consectetur 
					adipisicing elit. Commodi neque deserunt 
					ipsam porro! Quos, perferendis cum. Nihil
				 	possimus eveniet natus qui animi cum ipsum 
					quaerat voluptas, magnam nisi rerum sint. 
					Facilis eligendi sint veritatis reprehenderit
					repellat, sequi aut ullam inventore nostrum,
					sapiente cum neque placeat laboriosam expedita 
					veniam unde cupiditate nulla nihil est at fugit
					quam quod deserunt possimus. Amet dignissimos 
					porro corrupti corporis, itaque labore sequi 
					ducimus, exercitationem molestias ratione quae
					voluptatum esse culpa numquam officia. 
					Doloribus, a repudiandae! Aliquam fugit, 
					repellat sint qui dolorem omnis, porro
					expedita dolore modi numquam voluptatibus 
					 animi ea. Repellat suscipit qui possimus et!</p>
			</div>
		</div>
		<hr className="hrStyle" style={{color: 'red'}}/>
		<div className="row">
			<div className="col-2 fontRed text-center">Name
				<div className="text-center">Luke Skywalker</div>
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
);

export default Learnmore;