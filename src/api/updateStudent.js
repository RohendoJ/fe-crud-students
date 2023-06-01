import axios from "axios";

const updateStudent = async (data, id) => {
  const res = await axios.put(
    `https://gocrud-production.up.railway.app/api/update/${id}`,
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },

      withCredentials: false,
    }
  );

  return res.data.data;
};

export { updateStudent };
