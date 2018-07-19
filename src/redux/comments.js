import * as ActionTypes from './ActionTypes';


export const Comments = (state = {
        isLoading:true,
        errmess:null,
        comments:[]
    },  action) => {
    switch(action.type) {
        case ActionTypes.ADD_COMMENT : {
             return {...state, errmess:null,comments:state.comments.concat(action.payload)}
        }
        case ActionTypes.ADD_COMMENTS : {
            return {...state, errmess: null,comments: action.payload}
        }
        case ActionTypes.COMMENTS_FAILED : {
            return {...state, isLoading:false, errmess:action.payload}
        }
        default : {
            return state;
        }
    }
}