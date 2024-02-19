import "./App.css";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";

function App() {
  return (
    <Box sx={{ backgroundColor: "rgb(240,240,240)", height: "100vh" }}>
      <Navbar />
    </Box>
  );
}

export default App;
