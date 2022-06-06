import client, { ClientResponseType } from "~/api/httpClient";

const Users = {
    getAll: (): ClientResponseType<UserType[]> =>
        client.get("/users"),
};

export default Users;
