import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
