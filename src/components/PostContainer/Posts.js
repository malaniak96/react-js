import {Post} from "./Post";

import {useParams} from "react-router-dom";

const Posts = ({posts}) => {

    const {userId} = useParams();

    // const [posts, setPosts] = useState([]);
    //
    // useEffect(() => {
    //     postService.getByUserId(userId).then(({data})=> setPosts(data))
    // }, [userId]);
    //


    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};