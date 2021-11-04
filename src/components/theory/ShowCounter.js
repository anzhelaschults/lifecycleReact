import React, {useEffect, useState} from 'react';

const ShowCounter = (props) => {

    const [users, setUsers] = useState([]);

    useEffect( () => {
        console.log('First time');
        fetchUsers();
    }, []);


    const fetchUsers = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            setUsers(await response.json());
        } catch (e) {
            console.log( e.message );
        }
    }

    const logRender = () => {
        console.log('render');
        return <></>
    }

    useEffect(() => {
        console.log( users );
    }, [users])

    useEffect(() => {
        console.log("Counter++")}, [props.counter])


    return (
        <div>
            { logRender() }
            <p>{props.counter}</p>
            <p>{users.length ? users[0].address.street : 'No Users'}</p>
        </div>

    );
}

export default ShowCounter