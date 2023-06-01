import axios from "axios";

const getStudents = async (id) => {
  const res = await axios.get(
    `https://gocrud-production.up.railway.app/api/read/${id}`
  );
  return res.data.data;
};

export { getStudents };
