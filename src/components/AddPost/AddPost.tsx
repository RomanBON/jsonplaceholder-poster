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

    const isPendingAdding = useAppSelector(state => posts.add.slice.isPending(state));
    const isSuccessAdding = useAppSelector(state => posts.add.slice.isSuccess(state));
    const usersList = useAppSelector(state => users.get.slice.getUsers(state));

    useEffect(() => {
        dispatch(users.get.slice.actions.request());
    }, []);

    useEffect(() => {
        if (isSuccessAdding) {
            setTitle("");
            setUser(usersList[0]);
            onHide();
        }
    }, [isSuccessAdding]);

    useEffect(() => {
        if (usersList.length === 0) {
            return;
        }

        setUser(usersList[0]);
    }, [usersList.length]);

    const handleChangeUser = (e: FormEvent<HTMLSelectElement>) => {
        const { value } = e.target as HTMLSelectElement;
        const foundedUser = usersList.find(user => user.id === parseInt(value, 10));
        setUser(foundedUser);
    };

    const handleSubmitForm = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isPendingAdding) {
            return;
        }

        dispatch(posts.add.slice.actions.request({ userId: user?.id, title }));
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
                    disabled={isPendingAdding}
                >
                    Done
                </StyledAddPostButton>
            </StyledAddPostForm>
        </Modal>
    );
};
