import { createStore, combineReducers, compose, applyMiddleware } from "redux";
// import statusReducer from "../reducers/status"
import likedSongsReducer from "../reducers/likedSongs"
import playingQueueReducer from "../reducers/playingQueue"
// import userReducer from "../reducers/user"

import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
    // status: {
    //     loading: true,
    //     error: false,
    // },
    likedSongs: {
        list: [],
    },
    playingQueue: {
        nowPlaying: null,
        album: null
    },
    // user: {
    //     username: null,
    // },
};

const bigReducer = combineReducers({
    // status: statusReducer,
    likedSongs: likedSongsReducer,
    playingQueue: playingQueueReducer,
    // user: userReducer
});

export default function configureStore() {
    return createStore(
        bigReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    );
}