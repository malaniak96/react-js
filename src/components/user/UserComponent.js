import React from 'react';

const UserComponent = ({item: value}) => {
    return(
        <div key={value.id}>
            <h2>{value.id} {value.name}</h2>
            <p>{value.email} {value.surname}</p>
        </div>
    );
};

export default UserComponent;