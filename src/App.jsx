import React,{ useState,useEffect} from "react";
import People from "./components/People";
import Films from "./components/Films";

const App = () => {
  let [films,setFilms]=useState([])
  let [people,setPeople]=useState([])
  // let peoplename;
  // let description;
  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
    .then(res=>res.json())
    .then(films =>setFilms(films))
  }, []);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/people")
    .then(res=>res.json())
    .then(people =>setPeople(people))
  }, []);
  
  return (
    <>
      <div className=" d-flex justify-content-center">
        <div className="jumbotron jumbotron-fluid rounded m-5 ">
          <div className="container mt-0 text-center">
            <p className="lead font-weight-bold text-align-center">
              Studio Ghibli
            </p>
            <p className="lead pt-2 mt-2"> (株式会社スタジオジブリ</p>
          </div>
        </div>
      </div>
       <div className="d-flex justify-content-center"> 
       <button type="button" className="btn btn-primary">List Movies</button>
        <button type="button" className="btn btn-outline-secondary">List Characters</button>
      </div>

          {films.map(film=><Films key={film.id} film={film} />)} 
          {people.map(peeps=><People key={peeps.id} peeps={peeps} />)} 


          </>
  );
};
export default App;
