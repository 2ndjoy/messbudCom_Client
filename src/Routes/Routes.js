import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../Components/LayOut/DashBoardLayout";
import DashBoard from "../Components/DashBoardComponents/DashBoard/DashBoard";
import MealSheet from "../Components/DashBoardComponents/MealSheet/MealSheet";
import Bazar from "../Components/DashBoardComponents/Bazar/Bazar";
import BillsAndPayables from "../Components/DashBoardComponents/BillsAndPayables/BillsAndPayables";
import Members from "../Components/DashBoardComponents/Members/Members";
import Settings from "../Components/DashBoardComponents/Settings/Settings";
import Main from "../Components/LayOut/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <DashBoard />,
      },
      {
        path: "/dashboard",
        element: <DashBoard />,
      },
      {
        path: "/mealsheet",
        element: <MealSheet />,
      },
      {
        path: "/bazar",
        element: <Bazar />,
      },
      {
        path: "/billsandpays",
        element: <BillsAndPayables />,
      },
      {
        path: "/members",
        element: <Members />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
]);
export default router;
