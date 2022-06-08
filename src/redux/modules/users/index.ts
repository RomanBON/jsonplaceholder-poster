import { combineReducers } from "redux";

import * as get from "./get";

const reducer = combineReducers({
    get: get.reducer,
});

export default {
    get,
    reducer,
};
