import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import './App.css';
import DownloadApp from "./components/Sections/DownloadApp/DownloadApp";
import Footer from "./components/Sections/Footer/Footer";

function App() {
  return (
    <div>
      <CssBaseline />
      <Outlet />
      <DownloadApp />
      <Footer />
    </div>
  );
}

export default App;
