import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl';

export const addComment = (comments) => {
    return {
        type: ActionTypes.ADD_COMMENT,
        payload: comments
    }
}

export const postComment = (dishId, rating, comment, author) => (dispatch) => {
    return fetch(baseUrl + 'comments', {
        method:'POST',
        body: JSON.stringify({
            dishId:dishId,
            rating:rating,
            comment:comment,
            author:author,
            date: new Date().toISOString()
        }),
        headers: {
            'Content-Type':'application/json'
        }
    })
        .then(response => {
            if(response.ok){
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var err =  new Error(error.message);
                throw err;
        })
        .then(response => response.json())
        .then(comments => dispatch(addComment(comments)))
        .catch(err => console.log('POST COMMENTS :', err.message))
}

export const postFeedback = (feedback) => (dispatch) => {
    return fetch(baseUrl + 'feedback', {
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(feedback)
    })
        .then(response => {
            if(response.ok) {
                return response;
            }else {
                var err = new Error('Status :' + response.status + ': ' + response.statusText) ;
                throw err;
            }
        }, error => {throw Error(error.message)})
        .then(response => response.json())
        .then(response => alert('Thanks for your feedback'+ JSON.stringify(response)))
        .catch(error => console.log('ERROR POST FEEDBACK :', error.message))
}

export const fetchDishes = () => (dispatch) => {
    dispatch(dishLoading());
    return fetch(baseUrl + 'dishes')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)));
};

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading());
    return fetch(baseUrl + 'promotions')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)));
};

export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading());
    fetch(baseUrl + 'leaders')
        .then(response => {
            if(response.ok) {
                return response;
            } else {
                var error = new Error('Status : '+ response.status + ': ' + response.statusText);
                throw error;
            }
        },
        error => {
            var err = new Error(error.message);
            throw err;
        })
        .then(response => response.json())
        .then(leaders => dispatch(addLeaders(leaders)))
        .catch(error => dispatch(leadersFailed(error.message)))
};

export const leadersLoading = () => {
    return {
        type:ActionTypes.LEADERS_LOADING
    }
}

const addLeaders = (leaders) => {
    return {
        type:ActionTypes.ADD_LEADERS,
        payload:leaders
    }
};

const leadersFailed = (errmess) => {
    return {
        type:ActionTypes.LEADERS_FAILED,
        payload:errmess
    }
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
    return {
        type: ActionTypes.PROMOS_FAILED,
        payload: errmess
    }
};

export const fetchComments = () =>(dispatch) => {
    return fetch(baseUrl + 'comments')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                console.log(errmess);
                throw errmess;
        })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));

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



