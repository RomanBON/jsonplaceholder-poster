import { AnyAction, Dispatch, MiddlewareAPI } from "redux";

import { Users } from "~/api";
import { users } from "~/redux/modules";

export default ({ dispatch }: MiddlewareAPI, next: Dispatch, action: AnyAction) => {
    next(action);

    return Users.get()
        .then(({ data }) => {
            dispatch(users.get.slice.actions.success(data));
        })
        .catch((error) => {
            throw dispatch(users.get.slice.actions.fail(error));
        });
};
