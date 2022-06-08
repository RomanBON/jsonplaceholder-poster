import { MiddlewareAPI, AnyAction, Dispatch } from "redux";

import { users } from "~/redux/modules";

import getUsersMiddleware from "./get";

export default (store: MiddlewareAPI, next: Dispatch, action: AnyAction) => {
    switch (action.type) {
        case users.get.slice.actions.request.type:
            return getUsersMiddleware(store, next, action);
        default: {
            next(action);
        }
    }
};
