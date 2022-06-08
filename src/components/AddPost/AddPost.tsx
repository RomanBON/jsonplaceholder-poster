import React, {FC, useState, useCallback, FormEvent, useEffect} from "react";

import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import { posts } from "~/redux/modules";
import { Modal, Button } from "~/components/ui";

import {
    StyledAddPostForm,
} from "./styles";

export type AddPostProps = {
    isShowing: boolean;
    onHide: () => void;
};

export const AddPost: FC<AddPostProps> = ({ isShowing, onHide }) => {
    const dispatch = useAppDispatch();
    const [title, setTitle] = useState<string>("");

    useEffect(() => {
        // dispatch(posts.get.slice.actions.request({
        //     number: pageNumber, limit: DEFAULT_PAGE_ITEM_LIMIT,
        // }));
    }, []);

    const isPending = useAppSelector(state => posts.add.slice.isPending(state));

    const handleSubmitForm = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isPending) {
            return;
        }

        dispatch(posts.add.slice.actions.request({ userId: 1, title }));
    }, [title]);

    return (
        <Modal
            title="Add new post"
            isShowing={isShowing}
            onHide={onHide}
        >
            <StyledAddPostForm onSubmit={handleSubmitForm}>
                <select name="users" id="users">
                    <option value="lol">lol</option>
                </select>
                
                <input
                    type="text"
                    name="title"
                    required
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />

                <Button type="submit">Done</Button>
            </StyledAddPostForm>
        </Modal>
    );
};
