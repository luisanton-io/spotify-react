import Actions from '../consts/Actions'

export default function (state = {}, action) {
    switch (action.type) {
        //add like to a song
        case Actions.toggleLike.like:
            return {
                ...state,
                likedSongs: {
                    ...state.likedSongs,
                    songInfo: state.likedSongs.songInfo.concat(action.payload)
                }

            }
        //remove like to a song
        case Actions.toggleLike.unlike:
            const removeToLikedSongs = state.likedSongs.songInfo.findIndex(
                (songId) => songId === action.payload
            )
            return {
                ...state,
                likedSongs: {
                    ...state.likedSongs,
                    songInfo: [
                        ...state.likedSongs.songInfo.slice(0, removeToLikedSongs),
                        ...state.likedSongs.songInfo.slice(removeToLikedSongs + 1)
                    ]
                }

            }
        default: return state
    }
}