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
        <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
      </div>

      <div className="px-4 py-5 my-5 text-center">

    <h1 className="display-5 fw-bold">Centered hero</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">﷯
      </div>
      </div>
      </div>
     {/* adding multiple props */}
          {films.map(film=><Films key={film.id} film={film} />)} 
          {people.map(peeps=><People key={peeps.id} peeps={peeps} />)} 


          </>
  );
};
export default App;
