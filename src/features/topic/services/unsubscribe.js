import { axiosInstance, setAccessToken } from "../../../services/axios.config";
import { store } from "../../../store/store";

export const unsubscribe = async (userId, topicId) => {
  const isLoggedIn = store.getState().auth.isLogin;
  if (!isLoggedIn) {
    setAccessToken(null);
  }
  const token = store.getState().auth.currentUser.accessToken;
  setAccessToken(token);
  const res = await axiosInstance.post(
    `/user/unsubscribe/?userId=${userId}&topicId=${topicId}`
  );
  return res.data;
};
