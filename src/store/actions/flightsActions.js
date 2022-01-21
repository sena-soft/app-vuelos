import {
    GET_CITIES,
    GET_CITIES_SUCCESS,
    GET_CITIES_ERROR,
    GET_FLIGHTS,
    GET_SCHEDULES,
    GET_SCHEDULES_SUCCESS,
    GET_SCHEDULES_ERROR,
    ADD_NEW_FLIGHT,
    DELETE_FLIGHT,
    CHECKOUT_FLIGHT
} from '../types';
import clienteAxios from '../../config/axios';



// Función que descarga los productos de la base de datos
export function listCitiesAction() {
    return async (dispatch) => {
        dispatch( getCities() );

        try {
            const respuesta = await clienteAxios.get('/cities');
            dispatch( getCitiesSuccess(respuesta.data) )
        } catch (error) {
            console.log(error);
            dispatch( getCitiesError() )
        }
    }
}

const getCities = () => ({
    type: GET_CITIES,
    payload: true
});

const getCitiesSuccess = productos => ({
    type: GET_CITIES_SUCCESS,
    payload: productos
})
const getCitiesError = () => ({
    type: GET_CITIES_ERROR, 
    payload: true
});


export function listSchedulesAction(origin, destiny) {
    return async (dispatch) => {
        dispatch( getSchedules() );

        try {
            const respuesta = await clienteAxios.get(`/flights?origin=${origin.value}&destiny=${destiny.value}`);
            dispatch( getSchedulesSuccess(respuesta.data) )
        } catch (error) {
            console.log(error);
            dispatch( getSchedulesError() )
        }
    }
}

const getSchedules = () => ({
    type: GET_SCHEDULES,
    payload: true
});

const getSchedulesSuccess = productos => ({
    type: GET_SCHEDULES_SUCCESS,
    payload: productos
})
const getSchedulesError = () => ({
    type: GET_SCHEDULES_ERROR, 
    payload: true
});


export function addFlightAction(flight) {
    return (dispatch) => {
        dispatch( addNewFlight(flight) );

        
    }
}

const addNewFlight = flight => ({
    type: ADD_NEW_FLIGHT, 
    payload: flight
});


export function deleteFlightAction(id) {
    return (dispatch) => {
        dispatch( deleteFlight(id) );

        
    }
}

const deleteFlight = id => ({
    type: DELETE_FLIGHT, 
    payload: id
});

export function checkoutFlightAction() {
    return (dispatch) => {
        dispatch( checkoutFlight() );

        
    }
}

const checkoutFlight = () => ({
    type: CHECKOUT_FLIGHT, 
    payload: true
});










