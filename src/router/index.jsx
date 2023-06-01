import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/home"));
const AddStudent = lazy(() => import("../pages/addStudent"));
const EditStudent = lazy(() => import("../pages/editStudent"));
const Error = lazy(() => import("../pages/error"));

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/addstudent" element={<AddStudent />} />
        <Route exact path="/editstudent/:id" element={<EditStudent />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
