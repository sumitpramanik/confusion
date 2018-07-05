import {createStore, combineReducers} from 'redux';
import {Dishes} from './dishes.js';
import {Leaders} from './leaders.js';
import {Comments} from './comments.js';
import {Promotions} from './promotions.js';

export const ConfigureStore = () => {
    const store = createStore(combineReducers({
        dishes:Dishes,
        leaders:Leaders,
        comments:Comments,
        promotions:Promotions
    }));

    return store;
};