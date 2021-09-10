import React from "react";

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Cristiano Ronaldo', 
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/220px-Cristiano_Ronaldo_2018.jpg', 
            places: 3
        }
    ];

    return <UsersList items={USERS} />
};

export default Users;