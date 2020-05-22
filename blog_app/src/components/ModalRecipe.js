import React,{useState,useEffect} from 'react';
import axios from 'axios';

function ModalRecipe (props) {

    const [ingredientes,setIngredientes] = useState([])
    const [cantidades,setCantidades] = useState([])

    useEffect(()=>{
        const Ingredientes = []
        for(let i = 1;i < 16; i++){
            if(props.drink[`strIngredient${i}`]){
                Ingredientes.push(props.drink[`strIngredient${i}`])
            }
        }
        setIngredientes([...Ingredientes])

        const Cantidades = []
        console.log(props.drink)
        for(let i = 1;i < 16; i++){
            if(props.drink[`strMeasure${i}`]){
                Cantidades.push(props.drink[`strMeasure${i}`])
            }
        }
        setCantidades([...Cantidades])
    },[props.drink])

    return (
        <div className={props.open ? 'modal fade show my-5' : 'modal fade'}
            style={{display: props.open ? 'block' : 'none'}} >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header modal-top">
                        <h5 className="modal-title">Receta de:{props.drink.strDrink}</h5>
                        <button className="close" onClick={() => props.close(false)}>
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <ul>
                                {ingredientes.map((ingrediente) => (

                                <li>{ingrediente}</li>

                                )
                                )}
                                </ul>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <ul>
                                {cantidades.map((cantidad) => (
                                    <li>{cantidad}</li>
                                    )
                                )}
                                </ul>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <p>{props.drink.strInstructions}</p>
                            </div>
                        </div>
                   </div>
               </div>
           </div>
        </div>

    )

}


export default ModalRecipe;
