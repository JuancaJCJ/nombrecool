import React from 'react';

function Card (props) {

    return (
        <div className="col-12 col-sm-12 col-md-3 col-lg-3">
            <div className="card bg-card">
                  <img className="card-img" src={props.link} alt=""/>
                  <div className="card-body">
                      <h5 className="card-title">{props.name}</h5>
                      <a className=" mt-2 btn btn-recipe mr-2" href="">Ver receta</a>
                      <a className=" mt-2 btn btn-recipe" href="">Me gusta</a>
                  </div>
            </div>
        </div>

    )

}


export default Card;
