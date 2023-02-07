// Create a react functional component named Dashboard and export it
import React, { useState } from 'react';
import "./style.css";
import {
  Button,
  TablePagination,
  TableCell,
  TableBody,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  Paper,
  TextField
} from '@mui/material';
import ModalView from './ModalView'
const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [btnAction, setBtnAction] = useState(true);
  const handleClose = () => setOpen(false);


  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleOpen = () => setOpen(true);
  const openCreate = () => {
    setBtnAction(true);
    handleOpen();
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <div className="title">Contact Management System</div>
      <div className="buttonCreate">
        <Button variant="contained" onClick={openCreate}>
          Add Contact
        </Button>
      </div>
      <ModalView
        handleClose={handleClose}
        open={open}
        btnAction={btnAction}
      />
      <Paper sx={{ maxWidth: 1000, margin: "auto", top: 500 }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={2}>
                  First Name
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  Last Name
                </TableCell>
                <TableCell align="center" colSpan={3}>
                  Physical Address
                </TableCell>
                <TableCell align="center" colSpan={3}>
                  Billing Address
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {listOfContact.length ? (
                listOfContact
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((contact, i) => {
                    const {
                      firstname,
                      lastname,
                      physicaladdress,
                      billingaddress,
                      _id,
                    } = contact;
                    return (
                      <TableRow hover role="checkbox" key={i}>
                        <TableCell align="center" colSpan={2}>
                          {firstname}
                        </TableCell>
                        <TableCell align="center" colSpan={2}>
                          {lastname}
                        </TableCell>
                        <TableCell align="center" colSpan={3}>
                          {physicaladdress}
                        </TableCell>
                        <TableCell align="center" colSpan={3}>
                          {billingaddress}
                        </TableCell>
                        <TableCell align="center" colSpan={2}>
                          <span>
                            <EditOutlinedIcon
                              style={{ color: "green" }}
                              onClick={() => handleOpenToUpdate(_id)}
                            ></EditOutlinedIcon>
                          </span>
                          <span>
                            <DeleteOutlineOutlinedIcon
                              style={{ color: "red" }}
                              onClick={() => handleClickedDeleteIcon(_id)}
                            ></DeleteOutlineOutlinedIcon>
                          </span>
                        </TableCell>
                      </TableRow>
                    );
                  })
              ) : (
                <TableRow>
                  <TableCell align="center" colSpan={12}>
                    No Data Available
                  </TableCell>
                </TableRow>
              )} */}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          //   count={listOfContact.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>


    </div>
  );
};
export default Dashboard;