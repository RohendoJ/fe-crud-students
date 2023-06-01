import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { lazy } from "react";

const MainLayout = lazy(() => import("../../layouts/MainLayout"));

const Loading = () => {
  return (
    <MainLayout>
      <FontAwesomeIcon
        icon="fa-solid fa-circle-notch"
        size="2xl"
        style={{ color: "#1e6fd9" }}
        spin
      />
    </MainLayout>
  );
};

export default Loading;
