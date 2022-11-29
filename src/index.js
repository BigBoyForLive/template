import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createTheme, NextUIProvider, Text } from "@nextui-org/react";

const theme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      Button: "#EE6352",
      HeaderText: "rgba(13, 33, 73, 0.8)",
      subText: "rgba(0, 0, 0, 0.7)",
      primaryLightContrast: "$green600",
      gradient:
        "linear-gradient(274.98deg, #6D9DC5 38.85%, rgba(109, 157, 197, 0) 76.47%);",
      link: "#5E1DAD",

      // you can also create your own color
      myColor: "#ff4ecd",

      // ...  more colors
    },
    space: {},
    fonts: {},
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
      <App />
   
  </React.StrictMode>
);
