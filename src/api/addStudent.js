import axios from "axios";

const addStudents = async (data) => {
  const res = await axios.post(
    "https://gocrud-production.up.railway.app/api/create",
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

export { addStudents };
