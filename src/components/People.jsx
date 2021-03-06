import React from "react";

const People = ({ peeps }) => {
  return (
    <>
      <div className="card d-flex row px-4 py-5 my-5 text-center">
        <div className="card-body">
          <h5 className="card-title">{peeps.name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul className="list-group ">
          <li className="list-group-item">{peeps.age}</li>
          <li className="list-group-item">{peeps.hair_color}</li>
        </ul>
        <div className="card-body">
          {/* <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a> */}
        </div>
      </div>
    </>
  );
};

export default People;
