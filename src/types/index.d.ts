export {};

declare global {
    interface StateType<P> {
        payload: P;
        error: false;

        type?: string;
    }

    interface PageType {
        number: number;
        limit: number;
    }
}
