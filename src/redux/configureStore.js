import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Dishes} from './dishes.js';
import {Leaders} from './leaders.js';
import {Comments} from './comments.js';
import {Promotions} from './promotions.js';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createForms} from 'react-redux-form';
import {InitialFeedback} from './forms.js';

export const ConfigureStore = () => {
    const store = createStore(combineReducers({
        dishes:Dishes,
        leaders:Leaders,
        comments:Comments,
        promotions:Promotions,
        ...createForms({
            feedback:InitialFeedback
        })
    }),
        applyMiddleware(thunk, logger)
    );

    return store;
};