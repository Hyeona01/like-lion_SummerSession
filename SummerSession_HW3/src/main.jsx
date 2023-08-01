// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* 개발하기 용이하게 하는 도구??? 이거때매 처음에(마운트) 두번뜸 근데 삭제하지마 */}
    <App />
  </React.StrictMode>
);
