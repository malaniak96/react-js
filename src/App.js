import React, {useEffect, useState} from 'react';


const App = () => {
    const [user, setUser] = useState({});
    const [count, setCount] = useState(0);

    console.log(user);

    // useEffect(() => {
    //     const user = {
    //         name: 'max',
    //         age: 15
    //     }
    //     const nameKey = 'name'
    //     const newUser = {...user, [nameKey]:'Kostia'}
    // }, []);

    return (
      <div>
          <div> count: {count}</div>
          <button onClick={()=>setCount(prevState => prevState+1)}>inc</button>
      </div>
    );
};

export {App};