import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import MainContext from "./Context/MainContext.jsx";

createRoot(document.getElementById("root")).render(
  <MainContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MainContext>
);
