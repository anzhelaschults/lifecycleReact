import React, {useEffect, useState} from 'react';

const UsersList = () => {

    // array of users, initial state by default empty
    // array of tasks, initial state by default empty

    const [users, setUsers] = useState([]);
    const [todos, setTodos] = useState([]);

    //we run this function when our component is rendered? ---> purpose of useEffect here?

    useEffect(()=>{
        fetchUsers();
    },[]);

    //array of active users

    const [activeUser, setActiveUser] = useState(null);

    // if user is not active we call function fetch users that extracts our users?

    useEffect(()=>{
        if (!activeUser) return;
        fetchTodos();
    }, [activeUser])

    //function fetchUsers extracts our users from placeholder and adds them to our Array of users

    const fetchUsers = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            setUsers(await response.json());
        } catch(e) {
            console.log( e.message );
        }
    }

    //function fetchTasks extracts tasks from placeholder and adds them to our Array of tasks

    const fetchTodos = async () => {
        console.log( activeUser )
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?userId=' + activeUser.id);
            setTodos(await response.json());
        } catch(e) {
            console.log( e.message );
        }
    }

    // once we click user - we make him active

    const clickUserHandler = (user) => {
        setActiveUser(user);
    }

    // if user array is empty - return div No users

    const renderUsers = () => {
        if (!users.length) return <div className="list-group-item list-group-item-danger">No Users</div>
        return users.map( (user) =>
            <div
                key={user.id}
                className="list-group-item"
                onClick={() => {clickUserHandler(user)}}
            >{user.name}
            </div>
        )
    }

    // if tasks array is empty - return div No Deals. Styles from Bootstrap

    const renderTodos = () => {
        if (!todos.length) return <div className="list-group-item list-group-item-danger">No Deals</div>
        return todos.map( (todo) => <div key={todo.id} className="list-group-item">{todo.title}</div>)
    }

    return (
        <div className="row">
            <div className="col">
                <div className="list-group">
                    {renderUsers()}
                </div>
            </div>
            <div className="col">
                <div className="list-group">
                    {renderTodos()}
                </div>
            </div>
        </div>
    )
}

export default UsersList