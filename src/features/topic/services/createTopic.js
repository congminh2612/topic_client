import { store } from "../../../store/store";
import { axiosInstance, setAccessToken } from "../../../services/axios.config";

export const createTopic = async (topicData) => {
  const isLoggedIn = store.getState().auth.isLogin;
  if (!isLoggedIn) {
    setAccessToken(null);
  }
  const token = store.getState().auth.currentUser.accessToken;
  setAccessToken(token);
  const res = await axiosInstance.post("/topic", topicData);
  return res.data;
};
