import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App.tsx";

import Providers from "./components/providers/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Providers>
    <App />
  </Providers>
);
