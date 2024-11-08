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
import { dbTools, envTools, platformTools, testTools, Tool } from "./Tools";
import { Fragment, useState } from "react";
import CustomizedDialogs from "../../components/popup/CustomizedDialogs";

const ToolList = ({ selectedOS }: { selectedOS: string }) => {
  const [openModal, setOpenModal] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const [selectedTools, setSelectedTools] = useState<Tool[]>([]); // Change to store Tool objects

  function simplifyCommands(commands: string[]): string {
    const groupedCommands = commands.reduce(
      (acc: Record<string, string[]>, cmd: string) => {
        const [manager, ...rest] = cmd.split(" ");
        if (!acc[manager]) acc[manager] = [];
        acc[manager].push(rest.join(" "));
        return acc;
      },
      {}
    );

    return Object.entries(groupedCommands)
      .map(
        ([manager, cmds]) => `${manager} ${cmds.join(" && " + manager + " ")}`
      )
      .join(" && ");
  }

  const handleToolSelection = (tool: Tool) => {
    setSelectedTools((prev) =>
      prev.find((t) => t.name === tool.name)
        ? prev.filter((t) => t.name !== tool.name)
        : [...prev, tool]
    );
  };

  const handleCopyAllToolsCmd = async () => {
    const commands = [];
    for (const tool of selectedTools) {
      // @ts-ignore
      commands.push(tool.installCommands?.[selectedOS]);
    }
    // now get the installation command and copy to clipboard
    const oneLinerCmd = simplifyCommands(commands);
    if (oneLinerCmd) {
      await navigator.clipboard.writeText(oneLinerCmd).then(() => {
        setShowNotification(true);
      });
    }
  };

  const handleCopyClick = async (tool: any) => {
    const text = tool.installCommands[selectedOS];
    if (text) {
      await navigator.clipboard.writeText(text).then(() => {
        setShowNotification(true);
      });
    }
  };
  // console.log({ selectedTools });

  const handleCopyClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setShowNotification(false);
  };

  const handleClickOpenModal = () => {
    setOpenModal(true);
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
                <code className="code" onClick={() => handleCopyClick(tool)}>
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
                <code className="code" onClick={() => handleCopyClick(tool)}>
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
                <code className="code" onClick={() => handleCopyClick(tool)}>
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

      <h2 className="tooltype-heading">Database and GUI Tools</h2>
      <div className="tool-card-container">
        {dbTools.map((tool, index) => (
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
                <code className="code" onClick={() => handleCopyClick(tool)}>
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
          <Button
            onClick={handleClickOpenModal}
            variant="contained"
            endIcon={<ArrowRightAlt />}
          >
            Continue installation ({selectedTools.length})
          </Button>
        </div>
      )}
      {selectedTools.length > 0 && (
        <CustomizedDialogs
          title="Run scripts to install"
          desc={
            <Typography
              variant="body2"
              color="textSecondary"
              className="final-script"
            >
              <code className="code">
                {selectedTools.map((tool, index) => {
                  return (
                    <Fragment key={index}>
                      {
                        // @ts-ignore
                        tool.installCommands[selectedOS]
                      }
                      <br />
                    </Fragment>
                  );
                })}
              </code>
            </Typography>
          }
          buttonTitle="Copy"
          buttonOnClick={() => handleCopyAllToolsCmd()}
          setOpen={setOpenModal}
          open={openModal}
        />
      )}
    </div>
  );
};

export default ToolList;
