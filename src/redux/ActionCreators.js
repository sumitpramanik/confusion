import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl';

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
    return fetch(baseUrl + 'dishes')
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
};

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading());
    return fetch(baseUrl + 'promotions')
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
}
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
export const promosLoading = () => {
    return {
        type:ActionTypes.PROMOS_LOADING
    }
};

export const addPromos = (promos) => {
    return {
        type:ActionTypes.ADD_PROMOS,
        payload:promos
    }
};

export const promosFailed = (errmess) => {
    type:ActionTypes.PROMOS_FAILED
    payload:errmess
};

export const fetchComments = () =>(dispatch) => {
    return fetch(baseUrl + 'comments')
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))

}

export const addComments = (comments) => {
    return {
        type: ActionTypes.ADD_COMMENTS,
        payload:comments
    }
}

export const commentsFailed = (errmess) => {
    return {
        type:ActionTypes.COMMENTS_FAILED,
        payload:errmess
    }
}



