import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { App } from "./components/App/App.tsx";
import { AppContextProvider } from "./context/AppContextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
);
