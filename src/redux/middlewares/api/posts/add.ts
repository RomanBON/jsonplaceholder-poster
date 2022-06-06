import { AnyAction, Dispatch, MiddlewareAPI } from "redux";

import { Posts } from "~/api";
import { generic } from "~/redux/modules";

export default ({ dispatch }: MiddlewareAPI, next: Dispatch, action: AnyAction) => {
    next(action);

    const { asyncActions, payload } = action;
    const [SUCCESS, FAIL] = asyncActions;

    const payloadData = payload as PostAddType;

    return Posts.add(payloadData)
        .then(({ data }) => {
            dispatch(generic.actions.onSuccess({ type: SUCCESS, payload: data }));
        })
        .catch((error) => {
            throw dispatch(generic.actions.onFail({ type: FAIL, error: error.toString() }));
        });
};
