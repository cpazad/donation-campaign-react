import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";
import Home from "./Pages/Home/Home.jsx";
import Donation from "./Pages/Donation/Donation.jsx";
import Statistics from "./Pages/Statistics/Statistics.jsx";
import Donates from "./Components/Donate/Donates.jsx";
import DonationDetails from "./Pages/DonationDetails/DonationDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,  
      },
      {
        path: "/donations",
        element: <Donation></Donation>,
        loader: async () => fetch('/donation.json')
      },
      {
        path:"/donation/:id",
        element: <DonationDetails></DonationDetails>,
        loader: ()=> fetch('/donation.json')
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path:"/donates",
        element:<Donates></Donates>,
        
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
