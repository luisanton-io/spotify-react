import Actions from '../consts/Actions'
export default function (state = {}, action) {
    switch (action.type) {
        case Actions.playingQueue.add: 
            return {
                ...state,
                list: state.list.concat(action.payload)
            }
        case Actions.playingQueue.remove:
            return {
                ...state,
                list: state.list.filter(song => song !== action.payload)
            }
    }
}