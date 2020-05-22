import React,{useState,useEffect} from 'react';
import logo from '../logo.png';
import ModalLogin from './ModalLogin';
import ModalSignup from './ModalSignup';



function NavbarIndex(event) {
    
    const [modal, setModal] = useState(false);
    const [isOpenLog,setIsOpenLog] = useState(false);
    const [isOpenSign, setIsOpenSign] = useState(false);
    const toggle = () => setModal(!modal);
    const  styles = {
        content:{
            
        },
        font: {
            padding:8,
            
        }
    };
    
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-color">
            <a className="navbar-brand" href="/"><img className="img-logo d-inline-block align-top" src={logo} alt="logo" /></a>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                     <a className="nav-link" data-toggle="modal" id="singIn" data-value="signIn" onClick={() =>{setIsOpenLog(true)}} >Ingresar</a>
                </li>
                <li className="nav-item">
                    <a className = "nav-link"  data-value = "signUp" id = "signUp" data-toggle = "modal" onClick={() =>{setIsOpenSign(true)}}> Registrarse</a>
                </li>
            </ul>
        </nav>
            <ModalLogin open={isOpenLog} close={setIsOpenLog}/>
            <ModalSignup open={isOpenSign} close={setIsOpenSign}/>
            </div>
    )
                    }


export default NavbarIndex;