import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App";

const entryPoint = document.getElementById("root");
createRoot(entryPoint).render(<App />);
