import React from 'react';

export const Card = ({item}) =>
    <div className='clearfix'>
        <strong>{item.user.username}</strong>
        <small className='clearfix'>{item.user.email.toLowerCase()}</small>
        <p>{item.title}</p>
    </div>;