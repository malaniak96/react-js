import React from 'react';
import {set, useForm} from "react-hook-form";
import {commentService} from "../../services/commentService";

const CommentForm = ({setComments}) => {

   const {reset, register, handleSubmit} = useForm();

   const save = async (comment) => {
       const {data} = await commentService.create(comment);
       setComments(prev => [...prev, data]);
       reset();
   }

    return (
       <form onSubmit={handleSubmit(save)}>
           <input type="text" placeholder={'name'} {...register('name')}/>
           <input type="text" placeholder={'email'} {...register('email')}/>
           <input type="text" placeholder={'body'} {...register('body')}/>
           <button>save</button>
       </form>
    );
};

export {CommentForm};