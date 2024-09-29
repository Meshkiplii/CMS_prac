import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// doctor-appointment/
// │
// ├── public/
// │   ├── favicon.ico
// │   ├── index.html
// │   ├── logo192.png
// │   ├── logo512.png
// │   └── manifest.json
// │
// ├── src/
// │   ├── components/
// │   │   ├── Navbar.tsx
// │   │   ├── Home.tsx
// │   │   ├── BookAppointment.tsx
// │   │   └── Footer.tsx
// │   │
// │   ├── App.tsx
// │   ├── index.tsx
// │   ├── react-app-env.d.ts
// │   ├── reportWebVitals.ts
// │   ├── setupTests.ts
// │   │
// │   └── styles/
// │       └── customStyles.ts (optional for custom styling, if needed)
// │
// ├── tsconfig.json
// ├── package.json
// ├── package-lock.json
// ├── .gitignore
// ├── README.md
// │
// └── node_modules/ (auto-generated)
