import { lazy } from "react";
import { useForm } from "react-hook-form";
import { addStudents } from "../../api/addStudent";
import { useNavigate } from "react-router-dom";

const Navbar = lazy(() => import("../../components/navbar"));

const AddStudent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const student = async (data) => {
    await addStudents(data);
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <h1 className="text-[2rem] ml-[10vw] mt-[2rem] md:ml-[35vw] xl:ml-[35vw] md:mt-[5rem]">
        Add student
      </h1>
      <form onSubmit={handleSubmit(student)} className="md:ml-[15vw]">
        <div className="flex flex-col justify-center ml-[15vw] mt-[1rem] md:ml-[20vw]">
          <label htmlFor="nama">Nama</label>
          <input
            type="text"
            id="nama"
            className="bg-slate-50 border border-slate-400 rounded-md w-[70vw] mt-[0.7rem] h-[3rem] pl-[5vw] outline-none focus:outline-blue-300 md:w-[50vw] md:h-[2.5rem] md:pl-[2vw] lg:w-[40vw] xl:w-[30vw]"
            placeholder="Nama anda"
            {...register("nama", { required: true })}
            required
          />
        </div>
        <div className="flex">
          <div className="flex flex-col justify-center ml-[15vw] mt-[1rem] md:ml-[20vw]">
            <label htmlFor="kelas">Kelas</label>
            <select
              id="kelas"
              className="bg-slate-50 border border-slate-400 rounded-md w-[20vw] mt-[0.7rem] h-[3rem] outline-none focus:outline-blue-300 pl-1 md:w-[10vw] md:h-[2.5rem] lg:w-[7vw]"
              {...register("kelas", { required: true })}
              required
            >
              <option value="A1" selected>
                A1
              </option>
              <option value="A2">A2</option>
              <option value="A3">A3</option>
              <option value="A4">A4</option>
              <option value="A5">A5</option>
              <option value="A6">A6</option>
              <option value="B1">B1</option>
              <option value="B2">B2</option>
            </select>
          </div>
          <div className="flex flex-col justify-center ml-[5vw] mt-[1rem] md:ml-[3vw] lg:ml-[2vw]">
            <label htmlFor="semester">Semester</label>
            <select
              id="semester"
              className="bg-slate-50 border border-slate-400 rounded-md w-[20vw] mt-[0.7rem] h-[3rem] outline-none focus:outline-blue-300 pl-1 md:w-[10vw] md:h-[2.5rem] lg:w-[7vw]"
              {...register("semester", { required: true })}
              required
            >
              <option value="1" selected>
                1
              </option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
          </div>
          <div className="flex flex-col justify-center ml-[5vw] mt-[1rem] md:ml-[3vw] lg:ml-[2vw]">
            <label htmlFor="prodi">Prodi</label>
            <select
              id="prodi"
              className="bg-slate-50 border border-slate-400 rounded-md w-[20vw] mt-[0.7rem] h-[3rem] outline-none focus:outline-blue-300 pl-1 md:w-[10vw] md:h-[2.5rem] lg:w-[7vw]"
              {...register("prodi", { required: true })}
              required
            >
              <option value="TIF" selected>
                TIF
              </option>
              <option value="TIN">TIN</option>
              <option value="TEL">TEL</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col justify-center ml-[15vw] mt-[1rem] md:ml-[20vw]">
          <label htmlFor="wa">Whatsapp</label>
          <input
            type="text"
            id="wa"
            className="bg-slate-50 border border-slate-400 rounded-md w-[70vw] mt-[0.7rem] h-[3rem] pl-[5vw] outline-none focus:outline-blue-300 md:w-[50vw] md:h-[2.5rem] md:pl-[2vw] lg:w-[40vw] xl:w-[30vw]"
            placeholder="Whatsapp anda"
            {...register("wa", { required: true })}
            required
          />
        </div>
        <div className="flex flex-col justify-center items-center mt-[2rem] lg:mr-[13vw] xl:mr-[15vw]">
          <button className="bg-purple-500 text-white px-[3vw] py-[0.5rem] rounded-md hover:bg-purple-600 lg:px-[2vw]">
            Add student
          </button>
        </div>
      </form>
    </>
  );
};

export default AddStudent;
