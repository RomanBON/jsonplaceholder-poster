export interface QueryObject {
    [key: string]: string;
}

export const convertQueryStringToQueryObject = (queryString: string) => {
    if (!queryString) {
        return {};
    }

    let decodedQueryString = null;
    try {
        decodedQueryString = decodeURIComponent(queryString);
    } catch (e) {
        console.error(e);
    }

    if (!decodedQueryString) {
        return {};
    }

    return decodedQueryString
        .replace("?", "")
        .split("&")
        .reduce((acc: QueryObject, item) => {
            const [key, value] = item.split("=");
            acc[key] = value;

            return acc;
        }, {});
};

// Example: { foo: some, some: foo } -> foo=some&some=foo
export const convertQueryObjectToQueryString = (obj: QueryObject) => {
    return Object.keys(obj)
        .reduce((acc, item) => {
            acc += `&${item}=${obj[item]}`;

            return acc;
        }, "")
        .slice(1);
};
