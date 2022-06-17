export {};

declare global {
    type ErrorType = string | null;

    interface GenericState<T> {
        entities: T;
        loading: string;
        error: ErrorType;
    }

    interface PageType {
        number: number;
        limit: number;
    }
}
