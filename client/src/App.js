import Movie from "./components/Movie";
import { Container } from "@mui/system";
import { useState,useEffect } from "react";

function App() {

  const [movies, setMovies] = useState([])
  useEffect(() => {
    fetch('/movies').then((res)=>{
     if(res.ok)
      return res.json()
      
    }).then((data)=>{
      console.log("data",data)
       setMovies(data)
    })
  }, [])
 
  return (
    <div className="App">
      <Container>
        {movies.map((movie)=>{
          <Movie name={movie.name} releaseDate={movie.release_date} ratings= {movie.ratings} />
        })}
      </Container>
     </div>
  );
}

export default App;
