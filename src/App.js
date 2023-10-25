import './App.css';
import {UsersContainer} from "./components/UsersContainer/UsersContainer";
import {CommentContainer} from "./components/CommentsContainer/CommentContainer";

const App = () => {
  return (
    <div>
    <UsersContainer/>
    <CommentContainer/>
    </div>
  );
}

export {App};
