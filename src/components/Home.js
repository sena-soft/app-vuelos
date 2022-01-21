import React, { Fragment, useEffect, useState } from 'react';
import Boton from './ui/Boton';
import Container from "./ui/Container";
import Chip from "./ui/Chip";
import Select from 'react-select';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { listCitiesAction, listSchedulesAction, addFlightAction } from '../store/actions/flightsActions';

const Home = () => {
    const [origin, saveOrigin] = useState(null);
    const [destiny, saveDestiny] = useState(null);
    const [date, saveDate] = useState('');
    const [quantity, saveQuantity] = useState(1);
    const [flight, saveFlight] = useState(null);
    const dispatch = useDispatch();

    useEffect( ()=> {

        // Consultar la api
        const listCities = () => dispatch( listCitiesAction() );
        listCities();
        // eslint-disable-next-line
    }, []);

    
    // obtener el state
    const originCities = useSelector( state => state.flights.cities );
    const schedules = useSelector( state => state.flights.flightSchedules );
    const error = useSelector(state => state.flights.error);
    const loading = useSelector(state => state.flights.loading);
    const handleDestinyChange = value => {
        saveDestiny(value);
        const listSchedules = () => dispatch( listSchedulesAction(origin, value));
        listSchedules();
        console.log(schedules);
    }
    

    const handleCreate = async ()  =>{
        
        if (origin && destiny && date.trim() !== '' && quantity>0 && flight) {
            console.log("creando");
            const newFlight = {
                id: uuidv4(),
                origin,
                destiny,
                date,
                quantity,
                flight,
                total: flight.price * quantity
            }
            const addFlight =  () => dispatch( addFlightAction(newFlight));
            await addFlight();
            saveOrigin(null);
            saveDestiny(null);
            saveFlight(null);
            saveQuantity(1);
            saveDate('');
             Swal.fire({
                icon: 'success',
                title: '¡Éxito!',
                text: 'Vuelo agregado exitosamente'
            })
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Favor de completar los datos'
            })
        }
    }

    return ( 
       <>
           <div className="box-center">

           
           <h2>Horario de vuelos</h2>
           { error ? <p className="alert-danger">Hubo un error</p> : null }
           
           { loading ? <p>Cargando....</p> : null }
            <Container>
                <input type="date" className="form-input" value={date} onChange={e => saveDate(e.target.value)} />
                <Select placeholder="Origen" options={originCities} value={origin} onChange={e => saveOrigin(e)}/>
                <Select placeholder="Destino" options={originCities} value={destiny} onChange={e => handleDestinyChange(e)} />
                
                <input type="number" placeholder="Personas" value={quantity} onChange={e => saveQuantity(Number(e.target.value))} className="form-input"/>
           </Container>
           <Container>
                    { schedules.length === 0 ? 'No hay vuelos disponibles' : (
                       schedules.map(item => (
                           <Chip className={`${flight && flight.id === item.id ? "active": ""}`} key={item.id} onClick={()=>saveFlight(item)}>{item.hour} - ${item.price}</Chip>
                       ))
                   ) }
           </Container>
           <Boton onClick={handleCreate}>Agregar vuelo</Boton>
           </div>
       </>
     );
}
 
export default Home;