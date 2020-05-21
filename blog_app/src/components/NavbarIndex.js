import React,{useState} from 'react';
import logo from '../logo.png';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';

        
function NavbarIndex() {

    const [modal, setModal] = useState(false);

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
                     <a className="nav-link" data-toggle="modal" id="singIn" data-value="signIn" onClick={toggle}>Ingresar</a>
                </li>
                <li className="nav-item">
                    <a className = "nav-link"  data-value = "signUp" id = "signUp" data-toggle = "modal" onClick={toggle}> Registrarse</a>
                </li>
            </ul>
        </nav>
        < Modal isOpen = { modal} toggle = {toggle} >
            <ModalHeader toggle = {toggle}> Ingresar </ModalHeader> 
            <ModalBody >
            <p>Ingresa tu correo electronico</p>
            <input type="email" placeholder="ejemplo@hotmail.com" style={styles.font}></input>
            <p>Ingresa tu contraseña</p>
            <input type="password" placeholder="**********" style={styles.font}></input>
            </ModalBody> 
            </Modal>
            <ModalFooter>

            </ModalFooter>
        < Modal isOpen = { modal} toggle = {toggle} id="signUp">
            <ModalHeader toggle = {toggle}> Registrarse </ModalHeader> 
            <ModalBody>
            <p>Ingresa tu nombre</p>
            <input type="text" placeholder="Juan Perez" style={styles.font}></input>
            <p>Ingresa tu correo electronico</p>
            <input type="email" placeholder="ejemplo@hotmail.com" style={styles.font}></input>
            <p>Crea una contraseña</p>
            <input type="password" placeholder="**********" style={styles.font}></input>
            </ModalBody>
            <ModalFooter>
                <Button color="primary">Enviar</Button>{''}
                <Button color="secondary">Cancelar</Button>
            </ModalFooter>
            </Modal>
            </div>
    )
                    }


export default NavbarIndex;