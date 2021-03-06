import { AnyAction, Dispatch, MiddlewareAPI } from "redux";

export default (store: MiddlewareAPI, next: Dispatch, action: AnyAction) => {
    next(action);

    const { payload } = action;

    console.info("Added new post with data:", payload);
};
