import axios from "axios";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import './css/style.css'
//import {axiosInstance} from "../network/index";
import {addfavorite , removefavorite} from './actions';
import { connect } from "react-redux";
import { propTypes } from "react-bootstrap/esm/Image";
import Moviecard from "./Moviecard";
function Favorite() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios
    .get("https://api.themoviedb.org/3/movie/popular?api_key=1329a0f37fb81007926e9991415232ac")
    .then((res)=> {
      setMovies(res.data.results)

    })
    .catch((err) => {
      console.log(err)
    })
  },[])

    return (
      <>
     <div className="container">
     <div className="row "> 
    
  				{movies.map((movie) => {
  				return	<Moviecard movie={movie} key={movie.id}  />
  				})}      
  			</div>
        </div>
        </>
    );
  }
  export default connect()(Favorite)
  