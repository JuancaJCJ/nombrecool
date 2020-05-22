import React,{useState} from 'react'
import Blog from './Blog';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';

function ModalLog(props) {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const styles = {
        font: {
            padding: 8,

        }
    };
    return(
        <div>
            < Modal isOpen = {props.open} >
            <ModalHeader id="header"> Ingresar </ModalHeader> 
            <ModalBody id="fondo">
            <p id="center">Ingresa tu correo electronico</p>
            <input id="cennter"type="email" placeholder="ejemplo@hotmail.com" style={styles.font}></input>
            <p id="center">Ingresa tu contraseña</p>
            <input id="cennter" type="password" placeholder="**********" style={styles.font}></input>
            </ModalBody>
            <ModalFooter id="foot">
                <a className="btn btn-md btn-recipe" href="/Blog">Enviar</a>{''}
                
                <Button color="secondary" onClick={() =>props.close(false)}>Cancelar</Button>
            </ModalFooter> 
            </Modal>
        </div>
        
    )
}

export default ModalLog;