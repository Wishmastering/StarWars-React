import React, {useContext} from "react";  // #1 import useContext de React
import { Link } from "react-router-dom";
import {Context} from "../store/appContext.jsx"; // #2 Traer el context

 const Navbar = () => {
	const {store, actions}= useContext(Context)  // #3 Llamar el context  
	return (
		<nav className="navbar navbar-light bg-secondary mb-3 justify-content-around">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>

			{
			// Boton Usando Bootstrap aca abajo
			}
			<div className="ml-auto">
			<div className="dropdown">
				<button 
				className="btn btn-info dropdown-toggle" 
				type="button" 
				data-bs-toggle="dropdown" 
				aria-expanded="false">
					Favorites
				</button>
				<ul className="dropdown-menu bg-dark">
					{store.favorites.map((item , index) =>{ 
					return(
						<li className="bg-dark text-light d-flex w-100" key={index}> <p className="float-start w-100">{item}</p>
							<button className="text-light bg-secondary float-end mb-3" onClick={()=>actions.deleteFav(item)}>X</button>
								{
									//FALTA DEFINIR ACTION.ELIMINAR PARA QUE ESTO FUNCIONE
								}
						</li>
					)
					}
					)}
				</ul>
			</div>
			</div>
		</nav>
	);
};

export default Navbar;