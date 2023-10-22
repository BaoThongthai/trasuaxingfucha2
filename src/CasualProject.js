import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';


function CarouselProject() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to={1}></li>
        <li data-target="#carouselExampleIndicators" data-slide-to={2}></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://bom.so/OZspF0" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://bom.so/DMVyhR" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://bom.so/AEx5Ta" className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
}

export default CarouselProject;
