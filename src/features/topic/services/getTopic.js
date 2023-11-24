import axios from "axios";

export const getTopic = async () => {
  const res = await axios.get("http://localhost:8000/api/topic/getall");
  return res.data;
};
