import { axiosInstance } from "../../../services/axios.config";

export const getTopicById = async (id) => {
  const res = await axiosInstance.get(`topic/${id}`);
  return res.data;
};
