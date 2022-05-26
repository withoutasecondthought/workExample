import React, {useEffect, useState} from 'react';
import MainContent from "../elements/MainContent";
import MenuBar from "../elements/MenuBar";
import UserItem from "../elements/UserItem";
import axios from "axios";

const UsersScreen = () => {
    const [users , setUsers] = useState([])

    useEffect(() => {
    fetchUsers()
    }, [])

    const fetchUsers = () => {
        axios.get("https://jsonplaceholder.typicode.com/users?_limit=10")
            .then(response => setUsers(response.data))
            .catch(e => console.log(e))
    }

    return (
        <div className="screenDefault">
            <MenuBar />
            <MainContent  className=''>
                <p className="pageTitle">Users:</p>
                {users.map(user => <UserItem key={user.key} name={user.name} username={user.username} email={user.email}/>)}
            </MainContent>
        </div>
    );
};

export default UsersScreen;