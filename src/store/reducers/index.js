import { combineReducers } from 'redux';
import flightsReducer from './flightsReducer';
import alertaReducer from './alertaReducer';

export default combineReducers({
    flights: flightsReducer,
    alerta: alertaReducer
});