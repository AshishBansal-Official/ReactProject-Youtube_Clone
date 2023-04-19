import ReactDOM from "react-dom/client";
import "./index.css";
import {
    Navigate,
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom";

// Layouts
import RootLayout from "./layouts/RootLayout";

// Pages
import Home from "./pages/home/Home";
import { Provider } from "react-redux";
import store from "./services/redux/store";
import WatchScreen from "./pages/watch/WatchScreen";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/watch/:id",
                element: <WatchScreen></WatchScreen>,
            },
            {
                path: "*",
                element: <Navigate to="/"></Navigate>,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <RouterProvider router={appRouter} />
    </Provider>
);
