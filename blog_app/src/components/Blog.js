import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card'

function Blog (){
  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
  const [search, setSearch] = useState('margarita');
  const [recipeImg,setRecipeImg] = useState([]);

  useEffect (() => {
   
    axios.get(URL+search).then((response)=>{
      setRecipeImg(response.data.drinks) 
      console.log(setRecipeImg)
    }).catch((error)=> {
      console.log(error)
    })
  })
      return (
        <div className="container">
          <h1 className="mt-5">Las mejores bebidas,<br></br>aquí las tenemos</h1>
          <div className="row justify-content-center">
              <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                <form className="form-inline mt-4 justify-content-center">
                  <input className="form-control input-search" placeholder="Ej. Mojito" type="text"/>
                  <button type="submit" className="btn btn-md btn-search">Buscar</button>
                </form>
              </div>
          </div>
          <div className="row mt-5">
          { recipeImg.length > 0 ? recipeImg.map((recipe) => {
              return(
                <Card link={recipe.strDrinkThumb} name={recipe.strDrink}/>
              )
            }) : (
              <div className="col-12">
                <h1>No hay resultados en tu búsqueda 😞</h1>
              </div>
            )
          }    
          </div>

        </div>
      )
      
        
          
      


}

export default Blog;