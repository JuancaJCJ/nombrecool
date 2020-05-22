import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card'
import SearchRecipe from './SearchRecipe'
import ModalRecipe from './ModalRecipe'

function Blog (){
  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
  const [search, setSearch] = useState('');
  const [recipeImg,setRecipeImg] = useState([]);
  const [isOpen,setIsOpen] = useState(false)
  const [currentDrink,setCurrentDrink] = useState({});
 

  

  useEffect (() => {
   
    axios.get(URL+search).then((response)=>{
      setRecipeImg(response.data.drinks) 
      console.log(setRecipeImg)
      
    }).catch((error)=> {
      console.log(error)
    })
  },[isOpen])

  const findRecipe = (event) => {
    event.preventDefault() //Evita que recargue la página al dar click en Submit
    axios.get(URL+search).then((response)=>{
      setRecipeImg(response.data.drinks) //primer data es axios y el segundo es de api
    }).catch((error)=> {
      console.log(error)
    })

  }

      return (
        <div className="container">
          <h1 className="mt-5">Las mejores bebidas,<br></br>aquí las tenemos</h1>
          <div className="row justify-content-center">
            <SearchRecipe
              find={findRecipe}
              eventRecipe={(event) => setSearch(event.target.value)}
              />  
          </div>
          <div className="row mt-5">
          { recipeImg.length > 0 ? recipeImg.map((recipe) => {
              return(
                <Card 
                link={recipe.strDrinkThumb} 
                name={recipe.strDrink}
                id={recipe.idDrink}
                edit={() => { 
                  setIsOpen(true)
                  setCurrentDrink(recipe) 
              }}
                />
              )
            }) : (
              <div className="col-12">
                <h1>No hay resultados en tu búsqueda 😞</h1>
              </div>
            )
          }    
          </div>
          <ModalRecipe 
            open={isOpen} 
            close={setIsOpen}
            drink={currentDrink}
            />
          
        </div>
      )
      
        
          
      


}

export default Blog;