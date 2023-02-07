// Create a react functional component named Modal and export itimport React from 'react';
import React from 'react';
import { Modal, Fade, Box, Typography, Button, TextField, Backdrop, Paper} from '@mui/material';
import "./style.css";
const ModalView = (props) => {
  const { open, handleClose,btnAction } = props
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Paper>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
        <Box sx={{ ...style, textAlign: "center" }}>
            <Typography style={{ textAlign: "center" }} component={"div"}>
              {btnAction ? "Create User Contact" : "Update User Contact"}
            </Typography>
            <Typography
              id="transition-modal-title"
              sx={{ mt: 2 }}
              variant="h6"
              component={"div"}
            >
              <TextField
                sx={{ width: 250 }}
                id="standard-basic"
                required
                label="First Name"
                name="firstname"
                // value={firstname ?? ""}
                variant="standard"
              // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              //   handleUserInput(e)
              // }
              />
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{ mt: 2 }}
              component={"div"}
            >
              <TextField
                id="standard-basic"
                required
                label="Last Name"
                sx={{ width: 250 }}
                name="lastname"
                // value={lastname ?? ""}
                variant="standard"
              // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              //   handleUserInput(e)
              // }
              />
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{ mt: 2 }}
              component={"div"}
            >
              <TextField
                id="standard-basic"
                sx={{ width: 250 }}
                label="PhysicalAddress"
                name="physicaladdress"
                // value={physicaladdress ?? ""}
                variant="standard"
                required
              // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              //   handleUserInput(e)
              // }
              />
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{ mt: 2 }}
              component={"div"}
            >
              <TextField
                id="standard-basic"
                required
                sx={{ width: 250 }}
                label="Billing Address"
                name="billingaddress"
                // value={billingaddress ?? ""}
                variant="standard"
              // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              //   handleUserInput(e)
              // }
              />
            </Typography>
            {btnAction ? (
              <Button
                variant="contained"
                sx={{ top: 10 }}
              // onClick={handleAddContact}
              >
                Add Contact
              </Button>
            ) : (
              <Button
                variant="contained"
                sx={{ top: 10 }}
              // onClick={() => handleUpdateContact()}
              >
                Update Contact
              </Button>
            )}
          </Box>
        </Fade>
      </Modal>
    </Paper>
  );
};
export default ModalView;