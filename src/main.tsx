import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router";
import router from "./router/router.tsx";
import { Provider } from "react-redux";
import store from "./features/store.ts";
import axios from "axios";
axios.defaults.withCredentials = true;
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
