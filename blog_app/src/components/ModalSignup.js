import React,{useState} from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';

function ModalSign (props) {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const  styles = {
        content:{
            
        },
        font: {
            padding:8,
            
        }
    };

    return(
        
            < Modal isOpen = {props.open}  id="signUp">
            <ModalHeader id="header"> Registrarse </ModalHeader> 
            <ModalBody id="fondo">
            <p id="center">Ingresa tu nombre</p>
            <input id="cennter" type="text" placeholder="Juan Perez" style={styles.font}></input>
            <p id="center">Ingresa tu correo electronico</p>
            <input id="cennter" type="email" placeholder="ejemplo@hotmail.com" style={styles.font}></input>
            <p id="center">Crea una contraseña</p>
            <input id="cennter" type="password" placeholder="**********" style={styles.font}></input>
            </ModalBody>
            <ModalFooter id="foot">
                <Button color="primary" >Enviar</Button>{''}
                <Button color="secondary" onClick={() =>props.close(false)}>Cancelar</Button>
            </ModalFooter>
            </Modal>
        
    )
}

export default ModalSign;