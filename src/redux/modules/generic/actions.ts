interface OnSuccessProps {
  type: string;
  payload: unknown;
  query?: unknown;
}

interface OnFailProps {
  type: string;
  error: string;
}

// Action creator to successfully complete a request
export const onSuccess = ({ type, payload, query = {} }: OnSuccessProps): OnSuccessProps => ({
    type,
    payload,
    query,
});

// Action creator to fail request
export const onFail = ({ type, error }: OnFailProps): OnFailProps => ({
    type,
    error,
});
