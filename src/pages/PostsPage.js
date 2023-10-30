import {Posts} from "../components/PostContainer/Posts";
import {useLoaderData} from "react-router-dom";

const PostsPage = () => {

  const {data} =  useLoaderData();

    return (
        <div>
            <h1>Posts</h1>
            <Posts posts={data}/>
        </div>
    );
};

export {PostsPage};