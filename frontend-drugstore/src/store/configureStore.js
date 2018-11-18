import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import thunkMiddleware from 'redux-thunk';

export default function configureStore(){
    return createStore(rootReducer, {
        products:[],
        orders:[]
    },applyMiddleware(thunkMiddleware));
}