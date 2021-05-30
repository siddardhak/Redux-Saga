import { useDispatch, useSelector } from 'react-redux';

import { sagaActions } from '../SagaActions/sagaAction';

const Users = () => {
    const dispatch = useDispatch();
    const nomUsers = useSelector((state) => state.users.users);
    const displayUsersHandler = () => {
        dispatch({
            type: sagaActions.FETCH_USER
        })
    }
    const createUserHandler = () => {
        dispatch({
            type: sagaActions.CREATE_USERS
        })
    }
    const disusers = nomUsers ? nomUsers.map((user) => {
        return <p key={user.id}>{user.first_name}</p>
    }) : <p>No Users</p>

    return (
        <div>
            <button onClick={displayUsersHandler}>Display Poll nominations</button>
            <button onClick={createUserHandler}>Create Poll nominations</button>
            {/* {displayUsersHandler()} */}
            {disusers}
        </div>
    )
};

export default Users;