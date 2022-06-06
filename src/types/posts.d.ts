export {};

declare global {
    interface PostType {
        id: number;
        userId: number;
        title: string;
        body: string;
    }

    type PostAddType = Pick<PostType, "userId" | "title" | "body">;

    type PostDeleteType = Pick<PostType, "id">;
}
