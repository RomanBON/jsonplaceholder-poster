import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import { posts } from "~/redux/modules";

const Todo = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(posts.getAll.actions.getAllRequest({ number: 1 }));
    }, []);

    const allPosts = useAppSelector(state => state.posts.getAll.payload);

    console.log(allPosts);
    
    return(
        <>
            <div>
                test redux
            </div>
        </>

    );
};
export default Todo;
