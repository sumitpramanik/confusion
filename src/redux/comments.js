import * as ActionTypes from './ActionTypes';


export const Comments = (state = {
        isLoading:false,
        errmess:null,
        comments:[]
    },  action) => {
    switch(action.type) {
        case ActionTypes.ADD_COMMENT : {
             const comment = action.payload;
             comment.id = state.length;
             comment.date = new Date().toISOString();
             return state.concat(comment)
        }
        case ActionTypes.ADD_COMMENTS : {
            return {...state, comments: action.payload}
        }
        case ActionTypes.COMMENTS_FAILED : {
            return {...state, errmess:action.payload, comments:[]}
        }
        default : {
            return state;
        }
    }
}