import React, { useEffect } from 'react';

import Flight from './Flight';
import Boton from './ui/Boton';
import { Link } from 'react-router-dom';

// Redux
import { useSelector, useDispatch } from 'react-redux';

const Flights = () => {


    useEffect( ()=> {

      
    }, []);

    // obtener el state
    const flights = useSelector( state => state.flights.flights );
    const error = useSelector(state => state.flights.error);
    const loading = useSelector(state => state.flights.loading);

    const calculateTotal = () =>{
        let total = 0;
        flights.map(item =>{
            total += item.total;
        });

        return total;
    }
   
    return ( 
       <>
        <div className="box-center">
           <h2 className="text-center my-5">Listado de Vuelos</h2>
           { error ? <p className="alert">Hubo un error</p> : null }
           
           { loading ? <p className="text-center">Cargando....</p> : null }
            
           <table>
               <thead>
                    <tr>
                        <th >Origen</th>
                        <th >Destino</th>
                        <th >Fecha</th>
                        <th >Hora</th>
                        <th >Personas</th>
                        <th >Precio unitario</th>
                        <th >Precio</th>
                        <th >Acciones</th>
                    </tr>
               </thead>
               <tbody>
                   { flights.length === 0 ? '' : (
                       flights.map(item => (
                           <Flight
                                key={item.id}
                                flightDetail={item}
                           />
                       ))
                       
                   ) }
                
                 <tr>
                    <td colspan="6">Total</td>
                    <td ><input className="form-input" disabled value={calculateTotal()}/></td>
                </tr>
               </tbody>
           </table>
             <Link to={"/checkout"}
            ><Boton >Finalizar compra</Boton></Link>
           </div>
       </>
     );
}
 
export default Flights;