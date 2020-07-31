import Actions from '../consts/Actions'

export default function (state = {}, action) {
    switch (action.type) {
        //add like to a song
        case Actions.toggleLike.like:
            return {
                ...state,
                list: state.list.concat(action.payload)

            }
        //remove like to a song
        case Actions.toggleLike.unlike:
            return {
                ...state,
                list: state.list.filter( id => id !== action.payload )
            }
        default: return state
    }
}