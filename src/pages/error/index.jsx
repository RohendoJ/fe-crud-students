import { lazy } from "react";

const MainLayout = lazy(() => import("../../layouts/MainLayout"));

const Error = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center md:flex-row md:gap-2">
        <h1 className="text-3xl font-bold p-2">404</h1>
        <p className="text-slate-500 hidden md:flex">|</p>
        <p className="text-slate-500">This page could not be found.</p>
      </div>
    </MainLayout>
  );
};

export default Error;
