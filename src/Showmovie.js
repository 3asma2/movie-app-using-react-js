


import {useParams} from "react-router-dom";
import {useState, useEffect}  from  "react"
import axios from "axios";
import './css/style.css'


function Showmovie(props) {

	const params  = useParams()
	console.log(params, "params") 
	console.log(props, "props")

  const [movies, setmovies] = useState([])

	useEffect(() => {
		axios
		.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=1329a0f37fb81007926e9991415232ac`)
		.then((res)=> {
			console.log(res.data , "gggg")
			setmovies(res.data)

		})
		.catch((err) => {
			console.log(err)
		})
	}, [])


   return (
   <>
   
   <div className="container" >
   <div className="row">

     <div className="col-md-6">
  <img src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} width={400} height={500} />
  </div>
  <div className="col-md-3">
  <h1 className="mm" > Movie Details </h1>
   <p className="m"> Overview:</p> 
   <p id ="v"> {movies.overview}  </p>
  <p className="m"> Language: </p>
   <p id="v"> {movies.original_language}  </p>
  </div>
  </div>
  </div>
 </>
 );
}

  
  export default Showmovie;
  