import React from 'react';

function SearchRecipe (props) {
    return(
        <div className="col-12 col-sm-8 col-md-8 col-lg-8">
            <form onSubmit={props.find} className="form-inline mt-4 justify-content-center">
                  <input className="form-control input-search" onChange={props.eventRecipe} placeholder="Ej. Mojito" type="text"/>
                  <button type="submit" className="btn btn-md btn-search">Buscar</button>
            </form>
        </div>
    )
}

export default SearchRecipe;