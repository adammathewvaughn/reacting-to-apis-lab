import React from "react";

const Films = ({ film }) => {
  
  return (
      <>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">{film.title}</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            {film.description}
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center"></div>
        </div>
      </div>
    </>
  );
  
};
export default Films;
