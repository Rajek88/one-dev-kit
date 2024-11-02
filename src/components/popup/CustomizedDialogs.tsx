import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { CopyAll } from "@mui/icons-material";
import "./CustomizedDialogs.css";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs({
  title,
  desc,
  buttonTitle,
  buttonOnClick,
  open,
  setOpen,
}: {
  title: string;
  desc: any;
  buttonTitle: string;
  buttonOnClick: () => void;
  open: boolean;
  setOpen: (param: boolean) => void;
}) {
  return (
    <>
      <BootstrapDialog
        onClose={() => setOpen(false)}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {title}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={() => setOpen(false)}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>{desc}</DialogContent>
        <DialogActions>
          <Button
            endIcon={<CopyAll />}
            variant="contained"
            autoFocus
            onClick={buttonOnClick}
          >
            {buttonTitle}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}
