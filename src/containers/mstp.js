import React from 'react';
import {Card} from "../components/Card.jsx";

export const postsWithUsers = state => {
    const {Posts: {data: posts, fetching: postsFetching}} = state;
    const {Users: {data: users, fetching: usersFetching}} = state;
    const fetching = postsFetching || usersFetching;

    const data = fetching
        ? []
        : posts
            .filter(x => x.userId === 1)
            .map(x => ({
                ...x,
                user: users.find(y => y.id === x.userId)}))
            .map(x => ({
                id: x.id,
                deleting: x.deleting,
                text: <Card item={x} />
            }));

    return {
        data,
        fetching,
    }
};