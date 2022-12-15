import React, {useContext} from "react";  // #1 import useContext de React
import { Link } from "react-router-dom";
import {Context} from "../store/appContext.jsx"; // #2 Traer el context
const Planets = () => {
    const {store, actions}= useContext(Context)  // #3 Llamar el context
    
	return (
        <>
           {store.planetsCard.map((planetCard, i) => { 
               return(
           <div className="card container col-4 mx-auto bg-dark text-primary" style={{width: 18 + 'rem'}} key={i}>
             {
             //   "https://starwars-visualguide.com/assets/img/planets/"+ item.uid +".jpg"
             }
               <img src={"https://starwars-visualguide.com/assets/img/planets/"+ planetCard.uid +".jpg"} 
                   className="card-img-top" alt="Baby Rigo"/>
               <div className="card-body">
                   <h5 className="card-title"> <b>{planetCard.name} </b> </h5> 
                   <p className="card-text"> {planetCard.gender}</p>
                   <p className="card-text"> {planetCard.hair_color}</p>
                   <p className="card-text"> {planetCard.eye_color}</p>
                   <Link to={"/learnmoreplanet/"+planetCard.uid} className="btn btn-primary float-start">
                       Learn More!
                   </Link>

                   <button className="btn btn-danger float-end" onClick={()=> {actions.addFav(planetCard.name)}}>🤍</button>
                   
               </div>
           </div>
               
                   )                       
                                           }
                               )
           }
        </>
           )
                        }

export default Planets







