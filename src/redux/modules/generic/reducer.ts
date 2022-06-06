import { AnyAction } from "redux";

interface InitialStateType {
  payload: unknown;
  error: string | null;
  type: string;
}

const getReducer = (
    initialState: InitialStateType,
    [REQUEST, SUCCESS, FAIL]: [string, string, string]
) => {
    return (state = initialState, action: AnyAction) => {
        switch (action.type) {
            case initialState.type:
                return initialState;

            case REQUEST:
                return {
                    ...initialState,
                    type: action.type,
                };

            case SUCCESS:
                return {
                    ...initialState,
                    payload: action.payload,
                    type: action.type,
                };

            case FAIL:
                return {
                    ...initialState,
                    error: action.error,
                    type: action.type,
                };

            default:
                return state;
        }
    };
};

export default getReducer;
