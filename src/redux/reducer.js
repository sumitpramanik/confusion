import {DISHES} from '../shared/dishes.js';
import {LEADERS} from '../shared/leaders.js';
import {PROMOTIONS} from '../shared/promotions.js';
import {COMMENTS} from '../shared/comments.js';


export const initialState = {
    dishes:DISHES,
    leaders:LEADERS,
    promotions:PROMOTIONS,
    comments:COMMENTS
};

export const Reducer = (state = initialState, action) => {
    return state;
};