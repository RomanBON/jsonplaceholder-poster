import React, {
    FC,
    useState,
    useCallback,
    FormEvent,
    useEffect,
} from "react";

import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import { posts, users } from "~/redux/modules";
import { Modal, Select, Input } from "~/components/ui";

import {
    StyledAddPostForm,
    StyledAddPostButton,
} from "./styles";

export type AddPostProps = {
    isShowing: boolean;
    onHide: () => void;
};

export const AddPost: FC<AddPostProps> = ({ isShowing, onHide }) => {
    const dispatch = useAppDispatch();
    const [title, setTitle] = useState<string>("");
    const [user, setUser] = useState<UserType>();

    const isPendingAddPost = useAppSelector(posts.slice.isPendingAddPost());
    const isSuccessAddPost = useAppSelector(posts.slice.isSuccessAddPost());
    const usersList = useAppSelector(users.slice.getUsers());

    useEffect(() => {
        dispatch(users.slice.get());
    }, []);

    useEffect(() => {
        if (isSuccessAddPost) {
            setTitle("");
            setUser(usersList[0]);
            onHide();
        }
    }, [isSuccessAddPost]);

    useEffect(() => {
        if (usersList.length === 0) {
            return;
        }

        setUser(usersList[0]);
    }, [usersList.length]);

    const handleSubmitForm = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isPendingAddPost) {
            return;
        }

        if (user?.id) {
            dispatch(posts.slice.add({ userId: user.id, title }));
        }
    }, [title, user]);

    return (
        <Modal
            title="Add new post"
            isShowing={isShowing}
            onHide={onHide}
        >
            <StyledAddPostForm onSubmit={handleSubmitForm}>
                {user && (
                    <Select
                        value={user}
                        onChange={setUser}
                        options={usersList}
                        mapOptionToLabel={(user: UserType) => user.name}
                        mapOptionToValue={(user: UserType) => user.id}
                    />
                )}
                
                <Input
                    type="text"
                    name="title"
                    placeholder="Title"
                    required
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />

                <StyledAddPostButton
                    type="submit"
                    disabled={isPendingAddPost}
                >
                    Done
                </StyledAddPostButton>
            </StyledAddPostForm>
        </Modal>
    );
};
