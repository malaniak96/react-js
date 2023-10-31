import {User} from "./User";
import {useParams} from "react-router-dom";

const Users = ({users}) => {

    const {id} = useParams();

    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};