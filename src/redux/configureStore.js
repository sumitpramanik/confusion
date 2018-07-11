import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Dishes} from './dishes.js';
import {Leaders} from './leaders.js';
import {Comments} from './comments.js';
import {Promotions} from './promotions.js';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(combineReducers({
        dishes:Dishes,
        leaders:Leaders,
        comments:Comments,
        promotions:Promotions
    }),
        applyMiddleware(thunk, logger)
    );

    return store;
};