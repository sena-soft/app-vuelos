import React from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import Boton from "./ui/Boton";

// Redux
import { useDispatch } from 'react-redux';
import { deleteFlightAction } from '../store/actions/flightsActions';

const Flight = ({flightDetail}) => {
    const { origin, destiny,  id, date, quantity, flight, total } = flightDetail;

    const dispatch = useDispatch();
    const history = useHistory(); // habilitar history para redirección

    // Confirmar si desea eliminarlo
    const deleteFlight = id => {

        // preguntar al usuario
        Swal.fire({
            title: '¿Estas seguro?',
            text: "Un producto que se elimina no se puede recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                // pasarlo al action
                dispatch( deleteFlightAction(id) );
            }
        });
    }

   

    return ( 
        <tr>
            <td>{origin.label}</td>
            <td>{destiny.label}</td>
            <td>{date}</td>
            <td>{flight.hour}</td>
            <td>{quantity}</td>
            <td>$ {flight.price}</td>
            <td><span className="font-weight-bold"> $ {total} </span></td>
            <td className="acciones">
                
                <Boton 
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deleteFlight(id)}
                >Eliminar </Boton>
            </td>
        </tr>
     );
}
 
export default Flight;