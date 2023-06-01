import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCircleNotch,
  faUser,
  faChalkboardUser,
  faBook,
  faSchool,
  faPhone,
  faUserPen,
  faUserXmark,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer } from "react-toastify";

library.add(
  faCircleNotch,
  faUser,
  faChalkboardUser,
  faBook,
  faSchool,
  faPhone,
  faUserPen,
  faUserXmark,
  faUserPlus
);

const App = lazy(() => import("./App"));
const Loading = lazy(() => import("./components/loading"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary fallback="Error happens">
      <Suspense fallback={<Loading />}>
        <App />
        <ToastContainer />
      </Suspense>
    </ErrorBoundary>
  </React.StrictMode>
);
