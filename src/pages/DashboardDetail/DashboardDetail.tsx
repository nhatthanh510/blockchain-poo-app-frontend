import React from "react";
import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom";

const DashboardDetail = (props: React.PropsWithChildren) => {
  const loaderData: any = useLoaderData();
  console.log(
    "🚀 ~ file: DashboardDetail.tsx:11 ~ DashboardDetail ~ loaderData",
    loaderData
  );
  console.log("props", props);
  return (
    <>
      {loaderData.name} {loaderData.age}
    </>
  );
};

export default DashboardDetail;
