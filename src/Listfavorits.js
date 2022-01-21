import React from 'react'
import {Link} from "react-router-dom";
import './css/style.css'
import {addfavorite , removefavorite} from './actions';
import { connect } from "react-redux";
import { propTypes } from "react-bootstrap/esm/Image";
import Moviecard from "./Moviecard";

function Listfavorits(props) {
    console.log(props.favs);
    return (
        <>
        <div className="contaner" >
            <div className="row">
          
        {props.favs.map((movie) => {
  				return	<Moviecard movie={movie} key={movie.id}  />
  						 
  				})}
                  </div>
               
                  </div>
        </>
    )
}


export default connect((state)=>{
    return {favs: state}
  } )(Listfavorits)
