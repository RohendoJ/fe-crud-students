import { lazy } from "react";

const Router = lazy(() => import("./router"));

export default function App() {
  return (
    <div className="font-poppins">
      <Router />
    </div>
  );
}
