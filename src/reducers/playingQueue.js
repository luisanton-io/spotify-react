import Actions from '../consts/Actions'
export default function (state = {}, action) {
    switch (action.type) {
        case Actions.playingQueue.set:
            return {
                ...state,
                nowPlaying: action.payload.track,
                album: action.payload.album
            }
        default: return state;
    }
}