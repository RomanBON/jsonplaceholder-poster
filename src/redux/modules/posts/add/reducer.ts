import getReducer from "~/redux/modules/generic/reducer";

import { POST_ADD__INIT, POST_ADD__REQUEST, POST_ADD__SUCCESS, POST_ADD__FAIL } from "./types";

const initialState = {
    payload: {},
    error: null,
    type: POST_ADD__INIT,
};

export default getReducer(initialState, [POST_ADD__REQUEST, POST_ADD__SUCCESS, POST_ADD__FAIL]);
