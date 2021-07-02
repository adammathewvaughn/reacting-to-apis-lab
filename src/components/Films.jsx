import React from "react";
import { useState, useEffect } from "react";

const Films = ({ film }) => {
  useEffect(() => {}, []);

  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">Centered hero</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center"></div>
        </div>
      </div>
    </>
  );

  // fetch("https://ghibliapi.herokuapp.com/films");
  // {}
};
export default Films;
