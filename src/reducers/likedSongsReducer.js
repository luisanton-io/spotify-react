export default function (state = {}, action) {
    switch (action.type) {
        //add like to a song
        case "LIKE_SONG":
            return {
                ...state,
                likedSongs: {
                    ...state.likedSongs,
                    songInfo: state.likedSongs.songInfo.concat(action.payload)
                }

            }
        //remove like to a song
        case "UNLIKE_SONG":
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