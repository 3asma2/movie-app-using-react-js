import React from 'react'
import {Link} from "react-router-dom";
import './css/style.css'
import {addfavorite , removefavorite} from './actions';
import { connect } from "react-redux";
import { propTypes } from "react-bootstrap/esm/Image";
function Moviecard(props) {
    const {movie} = props
    function add(){
      props.dispatch(addfavorite(movie))
      console.log(props.favs);
    }
    function remove(){
      props.dispatch(removefavorite(movie.id))
      
    }
    
    return (  
        <div className="col-md-3" >
          <div className="card" id="n">
            <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
              <div className="card-body" >
                <div className="card-title" id="k"> {movie.original_title}</div>
                <div className="card-text">
                        <Link id="k" to={`/Showmovie/${movie.id}`}> 
                      Show Movie Details
                        </Link> 
          <button onClick ={(e)=> add(e)}> add to favorite </button>
          <button onClick ={(e)=> remove(e)}> remove from favorite </button>
          </div>
          </div>
          
          </div>
          </div>
                    )
}


export default connect((state)=>{
    return {favs: state}
  } )(Moviecard)
