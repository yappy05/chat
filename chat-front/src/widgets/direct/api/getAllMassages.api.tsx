import axios from "axios";

const getAllMassagesApi = async (directId: string) => {
  const response = await axios.get(
    `http://localhost:3000/direct-room/get-all-massages/${directId}`,
    { withCredentials: true }
  );
  return response.data;
};

export default getAllMassagesApi;
