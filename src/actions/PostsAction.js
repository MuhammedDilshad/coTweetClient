import * as PostsApi from "../api/PostRequest";

export const getTimelinePosts = (id) => async (dispatch) => {
  dispatch({ type: "RETREIVING_START" });
  try {
    const { data } = await PostsApi.getTimelinePosts(id);
    dispatch({ type: "RETREIVING_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "RETREIVING_FAIL" });
  }
};

export const deletePost = (id, userId) => async (dispatch) => {
  dispatch({ type: "delete_START" });
  try {
    console.log("keeri");

    const { data } = await PostsApi.deletePost(id, userId);
    console.log(data, "delete action");
    dispatch({ type: "REFRESH" });
    dispatch({ type: "delete_SUCCESS", data: { id } });
  } catch (error) {
    console.log(error);
    dispatch({ type: "delete_FAIL" });
  }
};
