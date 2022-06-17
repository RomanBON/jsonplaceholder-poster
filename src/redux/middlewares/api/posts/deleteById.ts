import { AnyAction, Dispatch, MiddlewareAPI } from "redux";

export default (store: MiddlewareAPI, next: Dispatch, action: AnyAction) => {
    next(action);

    const { meta: { arg: { id } } } = action;

    console.info("Deleted post with id:", id);
};
