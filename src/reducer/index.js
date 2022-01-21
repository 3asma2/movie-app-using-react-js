import {FAVORITE , UN_FAVORITE} from '../actions';

export default function favorite_reducer ( state =[] , action) {
    switch (action.type) {
        case FAVORITE:
            return [...state , action.payload];
            break;
        case UN_FAVORITE:
        return state.filter(movie => movie.id !== action.id);
        break;
        default:
            return state ;
    };
};
