import client, { ClientResponseType } from "~/api/httpClient";

const Posts = {
    getAll: (): ClientResponseType<PostType[]> =>
        client.get("/posts"),

    add: (data: PostAddType): ClientResponseType<PostType> =>
        client.post("/posts", data),

    deleteById: ({ id }: PostDeleteType) =>
        client.delete(`/posts/${id}`),
};

export default Posts;
