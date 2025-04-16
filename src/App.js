import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import './App.css';

function App() {
  return (
    <div>
      <CssBaseline />
      <Outlet />
    </div>
  );
}

export default App;
