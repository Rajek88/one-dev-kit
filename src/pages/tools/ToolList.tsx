import {
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  Typography,
  Button,
  SnackbarCloseReason,
  Snackbar,
  Alert,
} from "@mui/material";
import "./ToolList.css";
import { ArrowRightAlt, CloudDownload } from "@mui/icons-material";
import { envTools, platformTools, testTools, Tool } from "./Tools";
import { useState } from "react";

const ToolList = ({ selectedOS }: { selectedOS: string }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [selectedTools, setSelectedTools] = useState<Tool[]>([]); // Change to store Tool objects

  const handleToolSelection = (tool: Tool) => {
    setSelectedTools((prev) =>
      prev.find((t) => t.name === tool.name)
        ? prev.filter((t) => t.name !== tool.name)
        : [...prev, tool]
    );
  };

  const handleCopyClick = () => {
    setShowNotification(true);
  };
  // console.log({ selectedTools });

  const handleCopyClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setShowNotification(false);
  };

  return (
    <div className="tool-list">
      <Snackbar
        open={showNotification}
        autoHideDuration={1000}
        onClose={handleCopyClose}
      >
        <Alert
          onClose={handleCopyClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Copied to clipboard!
        </Alert>
      </Snackbar>
      <h2 className="tooltype-heading">Setup Tools</h2>
      <div className="tool-card-container">
        {envTools.map((tool, index) => (
          <Card className="tool-card" key={index}>
            <Checkbox
              color="primary"
              className="tool-checkbox"
              onChange={() => handleToolSelection(tool)}
            />
            <CardMedia
              component="img"
              alt={tool.name}
              height="140"
              image={tool.image}
              className="card-image"
            />
            <CardContent>
              <div className="toolname-header">
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
              </div>
              <Typography
                variant="body2"
                color="textSecondary"
                className="card-description"
              >
                {tool.description}
              </Typography>
              {/* <p>Install Command ({selectedOS}): </p> */}
              <Typography
                variant="body2"
                color="textSecondary"
                className="install-command"
              >
                <code className="code" onClick={handleCopyClick}>
                  {
                    // @ts-ignore
                    tool.installCommands[selectedOS]
                  }
                </code>
              </Typography>
              <Button
                variant="contained"
                color="primary"
                href={tool.url}
                target="_blank"
                className="card-link"
                endIcon={<CloudDownload />}
              >
                Download
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="tooltype-heading">Dev and Test Tools</h2>
      <div className="tool-card-container">
        {testTools.map((tool, index) => (
          <Card className="tool-card" key={index}>
            <Checkbox
              color="primary"
              className="tool-checkbox"
              onChange={() => handleToolSelection(tool)}
            />

            <CardMedia
              component="img"
              alt={tool.name}
              height="140"
              image={tool.image}
              className="card-image"
            />
            <CardContent>
              <div className="toolname-header">
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
              </div>
              <Typography
                variant="body2"
                color="textSecondary"
                className="card-description"
              >
                {tool.description}
              </Typography>
              {/* <p>Install Command ({selectedOS}): </p> */}
              <Typography
                variant="body2"
                color="textSecondary"
                className="install-command"
              >
                <code className="code" onClick={handleCopyClick}>
                  {
                    // @ts-ignore
                    tool.installCommands[selectedOS]
                  }
                </code>
              </Typography>
              <Button
                variant="contained"
                color="primary"
                href={tool.url}
                target="_blank"
                className="card-link"
                endIcon={<CloudDownload />}
              >
                Download
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="tooltype-heading">Platform Libraries & Tools</h2>
      <div className="tool-card-container">
        {platformTools.map((tool, index) => (
          <Card className="tool-card" key={index}>
            <Checkbox
              color="primary"
              className="tool-checkbox"
              onChange={() => handleToolSelection(tool)}
            />

            <CardMedia
              component="img"
              alt={tool.name}
              height="140"
              image={tool.image}
              className="card-image"
            />
            <CardContent>
              <div className="toolname-header">
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
              </div>
              <Typography
                variant="body2"
                color="textSecondary"
                className="card-description"
              >
                {tool.description}
              </Typography>
              {/* <p>Install Command ({selectedOS}): </p> */}
              <Typography
                variant="body2"
                color="textSecondary"
                className="install-command"
              >
                <code className="code" onClick={handleCopyClick}>
                  {
                    // @ts-ignore
                    tool.installCommands[selectedOS]
                  }
                </code>
              </Typography>
              <Button
                variant="contained"
                color="primary"
                href={tool.url}
                target="_blank"
                className="card-link"
                endIcon={<CloudDownload />}
              >
                Download
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      {selectedTools.length > 0 && (
        <div className="proceed-section">
          <Button variant="contained" endIcon={<ArrowRightAlt />}>
            Continue installation ({selectedTools.length})
          </Button>
        </div>
      )}
    </div>
  );
};

export default ToolList;
