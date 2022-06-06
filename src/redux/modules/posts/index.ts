import { combineReducers } from "redux";

import * as getAll from "./getAll";
import * as add from "./add";
import * as deleteById from "./delete";

const reducer = combineReducers({
    getAll: getAll.reducer,
    add: add.reducer,
    deleteById: deleteById.reducer,
});

export default {
    getAll,
    add,
    deleteById,
    reducer,
};
