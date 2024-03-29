import _ from "lodash";
import React, { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../store/configureStore";
import { getPostRequest, deletePostRequest } from "../store/post/action";
import { PostState } from "../store/post/types";

const TodoComponent = (): ReactElement => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getPostRequest({
        limit: 10,
        offset: 0,
      })
    );
  }, [dispatch]);
  const { posts, isLoading, error } = useSelector<ApplicationState, PostState>(
    (state) => state.post
  );
  // console.log("post: ", posts?.length, isLoading, error);
  return (
    <>
      <div>Todo List: {posts?.length}</div>
      {_.map(posts, (post, postIndex) => (
        <div className="flex" key={postIndex}>
          <div>{post.title}</div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              dispatch(deletePostRequest(post?.id));
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
};

export default TodoComponent;
