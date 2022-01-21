import {
    GET_CITIES,
    GET_CITIES_SUCCESS,
    GET_CITIES_ERROR,
    GET_FLIGHTS,
    GET_SCHEDULES,
    GET_SCHEDULES_ERROR,
    GET_SCHEDULES_SUCCESS,
    ADD_NEW_FLIGHT,
    DELETE_FLIGHT,
    CHECKOUT_FLIGHT
} from '../types';

// cada reducer tiene su propio state
const initialState = {
    cities: [],
    flightSchedules:[],
    flights:[],
    error: null,
    loading: false, 
    origin: null,
    destiny: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_CITIES:
        case GET_SCHEDULES:
            return {
                ...state,
                loading: action.payload
            }
        case GET_CITIES_ERROR:
        case GET_SCHEDULES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case GET_CITIES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                cities: action.payload
            }
        case GET_SCHEDULES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                flightSchedules: action.payload
            }
        case ADD_NEW_FLIGHT:
            return {
                ...state,
                flightSchedules: [],
                flights: [...state.flights, action.payload]
            }
        case DELETE_FLIGHT: 
            return {
                ...state,
                flights: state.flights.filter( flight => flight.id !== action.payload ),
            }
        case CHECKOUT_FLIGHT:
            return {
                ...state,
                flightSchedules:[],
                flights:[],
                error: null,
                loading: false, 
                origin: null,
                destiny: null
            }
        default:
            return state;
    }
}