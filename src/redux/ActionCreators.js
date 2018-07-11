import * as ActionTypes from './ActionTypes';
import {DISHES} from '../shared/dishes.js'

export const addComment = (dishId, rating, comment, author) => {
    return {
        type: ActionTypes.ADD_COMMENT,
        payload: {
            dishId: dishId, rating: rating, comment: comment, author: author
        }
    }
}

export const fetchDishes = () => (dispatch) => {
    dispatch(dishLoading());
    setTimeout(()=> {
        dispatch(addDishes(DISHES))
    },2000)
};

export const dishLoading = () => {
    return {
        type:ActionTypes.DISHES_LOADING
    }
};

export const addDishes = (dishes) => {
    return {
        type:ActionTypes.ADD_DISHES,
        payload:dishes
    }
};

export const dishesFailed = (errmess) => {
    return {
        type:ActionTypes.DISHES_FAILED,
        payload:errmess
    }
};

