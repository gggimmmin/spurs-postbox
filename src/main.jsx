import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalStyle from "./GlobalStyle.jsx";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import getStore from "@redux/config/configStore.js";

const store = getStore();
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <GlobalStyle />
    <ToastContainer />
  </Provider>
);
