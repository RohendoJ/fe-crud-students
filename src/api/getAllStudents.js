import axios from "axios";

const getAllStudents = async () => {
  const res = await axios.get(
    "https://gocrud-production.up.railway.app/api/reads"
  );
  return res.data.data;
};

export { getAllStudents };
