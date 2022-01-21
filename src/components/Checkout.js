import React, { useEffect, useState } from 'react';

import Swal from 'sweetalert2';
import Boton from './ui/Boton';
import Container from './ui/Container';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { checkoutFlightAction } from '../store/actions/flightsActions';
import { mostrarAlerta, ocultarAlertaAction} from '../store/actions/alertaActions';


const Checkout = ({history}) => {
    const [firstName, saveFirstName] = useState('');
    const [lastName, saveLastName] = useState('');
    const [email, saveEmail] = useState('');
    const [location, saveLocation] = useState('');

    const dispatch = useDispatch();


    const alerta = useSelector(state => state.alerta.alerta);
    const loading = useSelector(state => state.flights.loading);
    const handleCheckout = e => {
        e.preventDefault();

        // validar formulario
        if(firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || location.trim() === '') {

            const alerta = {
                msg: 'Ambos campos son obligatorios',
                classes: 'alert'
            }
            dispatch( mostrarAlerta(alerta) );

            return;
        }

        // si no hay errores

        Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: 'Gracias por su compra'
        })
        dispatch( ocultarAlertaAction() );

        dispatch( checkoutFlightAction() );

        // redireccionar
        history.push('/');
    }
  
    return ( 
       <>
        <div className="box-center">
           <h2 className="text-center my-5">Datos del comprador</h2>
           {alerta ? <p className={alerta.classes}> {alerta.msg} </p> : null }
           
           { loading ? <p className="text-center">Cargando....</p> : null }
             <form
                    onSubmit={handleCheckout}
                >
                    <Container>
                        <input type="text" placeholder="Nombres" value={firstName} onChange={e => saveFirstName(e.target.value)} className="form-input"/>
                        <input type="text" placeholder="Apellidos" value={lastName} onChange={e => saveLastName(e.target.value)} className="form-input"/>
                        <input type="text" placeholder="Dirección" value={location} onChange={e => saveLocation(e.target.value)} className="form-input"/>
                        <input type="email" placeholder="E-mail" value={email} onChange={e => saveEmail(e.target.value)} className="form-input"/>

                    
                     </Container>
                     <Boton 
                        type="submit"
                    >Finalizar Compra</Boton>
                </form>
           </div>
       </>
     );
}
 
export default Checkout;