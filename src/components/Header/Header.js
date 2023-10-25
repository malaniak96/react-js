import React from 'react';
import css from './Header.module.css'
import {NavLink, useNavigate} from "react-router-dom";
const Header = () => {
   const navigate = useNavigate();
    return (
       <div>
           <div className={css.Header}>
               <NavLink to={"/users"}>USERS</NavLink>
               <NavLink to={"/comments"}>COMMENTS</NavLink>
           </div>
           <button onClick={()=> navigate(-1)}>prev page</button>
           <button onClick={()=> navigate(1)}>next page</button>
       </div>
    );
};

export {Header};