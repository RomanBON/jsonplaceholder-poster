import { combineReducers } from "redux";

import * as get from "./get";
import * as getAll from "./getAll";
import * as add from "./add";
import * as deleteById from "./delete";

const reducer = combineReducers({
    get: get.reducer,
    getAll: getAll.reducer,
    add: add.reducer,
    deleteById: deleteById.reducer,
});

export default {
    get,
    getAll,
    add,
    deleteById,
    reducer,
};
