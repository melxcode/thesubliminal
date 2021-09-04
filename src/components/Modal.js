import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Modal,
  Button,
  Grid,
  CardHeader,
  Divider,
  CardContent,
  CardActions,
  colors,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "53%",
    marginTop: "20%",
    padding: "6px 16px",
    backgroundColor: colors.grey[50],
    position: "relative",
  },
  modal: {
    display: "flex",
  },
}));

const ConfirmModal = ({ onClose, openModal, onConfirm, content }) => {
  const classes = useStyles();

  if (!openModal) {
    return null;
  }
  return (
    <Modal
      onClose={onClose}
      open={openModal}
      BackdropProps={{
        transitionDuration: 2000,
      }}
    >
      <>
        <Grid className={classes.root}>
          <>
            <CardHeader title="Save Refractive Visit" />
            <Divider />

            <CardContent>{content}</CardContent>
            <CardActions className={classes.actions}>
              <Button
                variant="contained"
                onClick={async () => {
                  await onConfirm();
                }}
              >
                Save
              </Button>
              <Button
                onClick={() => {
                  onClose(false);
                }}
              >
                Close
              </Button>
            </CardActions>
          </>
        </Grid>
      </>
    </Modal>
  );
};
export default ConfirmModal;
