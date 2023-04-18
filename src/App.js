import * as React from "react";
import Button from "@mui/material/Button";
import Header from "./Components/Header/Header";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";

export default function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
