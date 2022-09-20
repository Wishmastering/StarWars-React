import React, {useContext} from "react";  // #1 import useContext de React
import { Link } from "react-router-dom";
import {Context} from "../store/appContext.jsx"; // #2 Traer el context

const Characters = () => {
    const {store, actions}= useContext(Context)  // #3 Llamar el context
    // console.log(useContext(Context));
        
	return (
         <>
            {store.charactersCard.map((charCard, i) => { 
                return(
            <div className="card container col-4 mx-auto" style={{width: 18 + 'rem'}} key={i}>
                <img src={"https://starwars-visualguide.com/assets/img/characters/"+ charCard.uid +".jpg"} 
                    className="card-img-top" alt="Baby Rigo"/>
                <div className="card-body">
                    <h5 className="card-title"> <b>{charCard.name} </b> </h5> 
                    <p className="card-text"> {charCard.gender}</p>
                    <p className="card-text"> {charCard.hair_color}</p>
                    <p className="card-text"> {charCard.eye_color}</p>
                    <Link to="/learnmore">
                        <a href="#" className="btn btn-primary float-start">Learn More!</a>
                    </Link>

                    <button  className="btn btn-danger float-end" onClick={()=> {actions.addFav(charCard.name)}}>🤍</button>
                    {
                    
                        // Pendiente poder hacer el corazon "Del color que se desee o algo similar"
                    }

                </div>
            </div>
                
                    )                       
                                            }
                                )
            }
         </>
            )
                         }

export default Characters







