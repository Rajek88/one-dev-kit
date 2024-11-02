import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Button,
} from "@mui/material";
import "./ToolList.css";
import { tools } from "./Tools";

const ToolList: React.FC = () => {
  const [selectedOS, setSelectedOS] = useState<"mac" | "windows" | "linux">(
    "mac"
  );

  return (
    <div className="tool-list">
      <Typography variant="h4" component="h1" className="tool-list-title">
        Developer Tools and Resources
      </Typography>
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
      <div className="tool-card-container">
        {tools.map((tool, index) => (
          <Card className="tool-card" key={index}>
            <Checkbox color="primary" className="tool-checkbox" />
            <CardMedia
              component="img"
              alt={tool.name}
              height="140"
              image={tool.image}
              className="card-image"
            />
            <CardContent>
              <Typography variant="h6" className="card-title">
                {tool.name}
              </Typography>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                className="card-category"
              >
                {tool.category} {tool.subcategory && `- ${tool.subcategory}`}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                className="card-description"
              >
                {tool.description}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                className="install-command"
              >
                Install Command ({selectedOS}):{" "}
                <code>{tool.installCommands[selectedOS]}</code>
              </Typography>
              <Button
                variant="contained"
                color="primary"
                href={tool.url}
                target="_blank"
                className="card-link"
              >
                Download
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ToolList;
