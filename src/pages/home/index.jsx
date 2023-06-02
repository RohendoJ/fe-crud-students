import { lazy, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllStudents } from "../../api/getAllStudents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import noData from "../../assets/no-data.jpg";
import axios from "axios";

const Navbar = lazy(() => import("../../components/navbar"));
const ContentLayout = lazy(() => import("../../layouts/ContentLayout"));

const Home = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const data = await getAllStudents();
    setStudents(data);
  };

  const deleteStudent = async (id) => {
    await axios.delete(
      `https://gocrud-production.up.railway.app/api/delete/${id}`
    );

    fetchStudents();
  };

  useEffect(() => {
      fetchStudents();
  }, []);

  if (students.length === 0) {
    return (
      <>
        <Navbar />
        <div className="flex items-end">
          <h1 className="text-[2rem] mt-[5vh] ml-[15vw] md:ml-[25vw] md:mt-[7vh] lg:ml-[20vw]">
            List Students
          </h1>
          <div className="w-[7vw] h-[4vh] md:w-[4vw] md:h-[3vh] lg:w-[3vw] lg:h-[4vh] lg:ml-[2vw] xl:h-[5vh] bg-red-500 rounded-full mb-[1.5vh] ml-[3vw] grid place-items-center text-white">
            {students.length}
          </div>
        </div>
        <ContentLayout>
          <img
            src={noData}
            alt="No data"
            className="md:w-[50vw] object-cover md:ml-[17vw] lg:w-[30vw]"
          />
          <FontAwesomeIcon
            icon="fa-solid fa-user-plus"
            size="2xl"
            style={{ color: "#4e89ef" }}
            className="mt-[2vh] md:ml-[17vw]"
          />
        </ContentLayout>
      </>
    );
  }
  return (
    <>
      <Navbar />
      <div className="flex items-end">
        <h1 className="text-[2rem] mt-[5vh] ml-[15vw] md:ml-[25vw] md:mt-[7vh] lg:ml-[25vw] xl:ml-[20vw]">
          List Students
        </h1>
        <div className="w-[7vw] h-[4vh] md:w-[4vw] md:h-[3vh] lg:w-[3vw] lg:h-[4vh] lg:ml-[2vw] xl:h-[5vh] bg-red-500 rounded-full mb-[1.5vh] ml-[3vw] grid place-items-center text-white">
          {students.length}
        </div>
      </div>
      <div className="h-[60vh] overflow-auto xl:mt-[5vh]">
        {students.map((student) => (
          <div className="flex flex-col justify-center items-center ml-0 mb-[3vh] md:ml-[22vw] lg:ml-[15vw] xl:ml-[7vw]">
            <div
              className="bg-white border border-slate-400 w-[70vw] h-[9vh] rounded-md mt-[2vh] flex flex-col lg:w-[60vw] xl:w-[50vw]"
              key={student.id}
            >
              <div className="flex ml-[3vw] mt-[0.5vh] gap-[2vw]">
                <FontAwesomeIcon
                  icon={["fas", "user"]}
                  style={{ color: "#455dd9" }}
                  className="mt-[1.5vh]"
                />
                <h1 className="mt-[1vh]">{student.nama}</h1>
              </div>
              <div className="flex">
                <div className="flex items-center gap-[1vw] ml-[3vw] mt-[0.5vh]">
                  <FontAwesomeIcon
                    icon={["fas", "chalkboard-user"]}
                    size="xs"
                    style={{ color: "#50ceb9" }}
                  />
                  <h2 className="text-[0.7rem] text-slate-500">
                    {student.kelas}
                  </h2>
                </div>
                <div className="flex items-center gap-[1vw] ml-[3vw] mt-[0.5vh]">
                  <FontAwesomeIcon
                    icon={["fas", "book"]}
                    size="xs"
                    style={{ color: "#6a4fc9" }}
                  />
                  <h2 className="text-[0.7rem] text-slate-500">
                    {student.semester}
                  </h2>
                </div>
                <div className="flex items-center gap-[1vw] ml-[3vw] mt-[0.5vh]">
                  <FontAwesomeIcon
                    icon={["fas", "school"]}
                    size="xs"
                    style={{ color: "#f26969" }}
                  />
                  <h2 className="text-[0.7rem] text-slate-500">
                    {student.prodi}
                  </h2>
                </div>
                <div className="flex items-center gap-[1vw] ml-[3vw] mt-[0.5vh]">
                  <FontAwesomeIcon
                    icon={["fas", "phone"]}
                    style={{ color: "#47e166" }}
                    size="xs"
                  />
                  <h2 className="text-[0.7rem] text-slate-500">{student.wa}</h2>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="flex gap-[2vw] justify-evenly items-center mt-[1vw] md:mt-[0.20rem] w-[5vw] mr-[2vw]">
                  <Link to={`/editstudent/${student.id}`}>
                    <FontAwesomeIcon
                      icon={["fas", "user-pen"]}
                      size="xs"
                      style={{ color: "#4377d0" }}
                      className="cursor-pointer"
                    />
                  </Link>
                  <FontAwesomeIcon
                    icon={["fas", "user-xmark"]}
                    size="xs"
                    style={{ color: "#e62828" }}
                    className="cursor-pointer mb-[0.05rem]"
                    onClick={() => deleteStudent(student.id)}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ContentLayout>
        <Link to="/addstudent">
          <FontAwesomeIcon
            icon="fa-solid fa-user-plus"
            size="2xl"
            style={{ color: "#4e89ef" }}
            className="mt-[2vh] lg:ml-[15vw] xl:ml-[5vw]"
          />
        </Link>
      </ContentLayout>
    </>
  );
};

export default Home;
