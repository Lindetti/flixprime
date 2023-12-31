import "./Pages.css";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";

const Drama = () => {
const getShowsUrl = `https://api.tvmaze.com/shows`;
const [drama, setDrama] = useState([]);

useEffect(() => {
  window.scrollTo(0, 0);
    fetch(getShowsUrl)
      .then((response) => response.json())
      .then((shows) => {
        const dramaShows = shows.filter((show) => show.genres.includes("Drama"));
        setDrama(dramaShows);
        console.log(dramaShows)
      });
  }, []);

    return (
        <div className="all-wrapper"> 
        <div className="all-content-wrapper">
          <div className="title-wrapper">
        <div className="all-title">
       <h1>Drama</h1>
       </div>
       </div>


        <div className="all-content">
        {drama.slice(3, 153).map((show, index) => {
            return (
                <div key={index} className="all-shows">
                  <div className="all-shows-image">
                  <Link to={`/info/${show.id}`}>
      <img src={show.image.medium} alt="tv-show-image" />
    </Link>
                  </div>
                  <div className="all-shows-title">
                    <p>{show.name}</p>
                  </div>
                </div>
            )
        })}
        </div>
        </div>
        
        </div>
    )
}

export default Drama;