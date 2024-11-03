/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
function SingleMovie() {
  const params = useParams();
  const [movieData, setMovieData] = useState({});
  console.log(params.movieId);
  const API_KEY = "17f1ceadcf3767a35e55dd6204800668";
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${API_KEY}
    `)
      .then((res) => res.json())
      .then((data) => setMovieData(data));
  }, []);
  return (
    <div>
      SingleMovie
      <img
        width={400}
        src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
        alt=""
      />
    </div>
  );
}
export default SingleMovie;
