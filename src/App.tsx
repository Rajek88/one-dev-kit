import { useState } from "react";
import "./App.css";
import ToolList from "./pages/tools/ToolList";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Routes } from "react-router-dom";
import InternalRoutes from "./routes/InternalRoutes";

function App() {
  const [selectedOS, setSelectedOS] = useState<"mac" | "windows" | "linux">(
    "mac"
  );

  return (
    <>
      <div className="navbar">
        <div>
          <Typography variant="h4" component="h1" className="navbar-title">
            One Dev Kit
          </Typography>
          <p className="logo-desc">Speed up your dev setup</p>
        </div>

        <FormControl fullWidth className="os-selector">
          <InputLabel>Select OS</InputLabel>
          <Select
            value={selectedOS}
            onChange={(e) =>
              setSelectedOS(e.target.value as "mac" | "windows" | "linux")
            }
          >
            <MenuItem value="mac">Mac</MenuItem>
            <MenuItem value="windows">Windows</MenuItem>
            <MenuItem value="linux">Linux</MenuItem>
          </Select>
        </FormControl>
      </div>
      <InternalRoutes selectedOS={selectedOS} />
    </>
  );
}

export default App;
