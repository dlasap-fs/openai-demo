// Create a react functional component named Dashboard and export it
import React, { useState, useEffect } from 'react';
import "./style.css";
import {
  Button,
  TableCell,
  TableBody,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';
import ModalView from './ModalView'
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import api from '../api'
const base = 'http://localhost:4001/api'
const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [btnAction, setBtnAction] = useState(true);
  const handleClose = () => setOpen(false);

  const handleOpen = () => setOpen(true);
  const openCreate = () => {
    setBtnAction(true);
    handleOpen();
  };
// Create an initial state for first_name, last_name, billing_address and physical_address
let initialState = {
  first_name: '',
  last_name: '',
  billing_address: '',
  physical_address: ''
};
const [contact, setContact] = useState(initialState)

const [contactList,setContactList] = useState([])
  const handleReset = () => {
    setContact({
      first_name: '',
      last_name: '',
      physical_address: '',
      billing_address: ''
    })
  }
  // Create a function named handleUserInput with event parameter
  

const  handleUserInput=(event) =>{
  // code to handle user input
  setContact({...contact,[event.target.name]:event.target.value})
}
// Create a asynchronous function named handleGetAllContact that calls a get axios function
const handleGetAllContacts = async () => {
  try {
    const response = await api.get(`${base}/getAllContacts`);
    setContactList(response.data)
  } catch (error) {
    console.log(error);
  }
};
// Create a asynchronous function named handleAddContact that calls a post axios function
const handleAddContact = async () => {
  try {
    const response = await api.post(`${base}/add`, {contact});
    setContactList([...contactList,response.data])
    handleReset()
    handleClose()
  } catch (error) {
    console.error(error);
  }
};
// Create a asynchronous function named handleDeleteContact that calls a delete axios function
const handleDeleteContact = async (id) => {
  try {
    await api.delete(`${base}/delete/${id}`);
    const newContact = contactList.filter((i)=>{
      console.log(i)
      return i._id !== id
    })
    setContactList(newContact)
  } catch (err) {
    console.error(err);
  }
};
const handleOpenUpdateModal = (id)=>{
  const user = contactList.find((data)=>id === data._id)
  setBtnAction(false);
  setContact(user)
  handleOpen()
}
//  Create a asynchronous function named handleUpdateContact that calls a put axios function
const handleUpdateContact = async(contactId)=> {
  try {
await api.put(`${base}/update/${contactId}`, contact);
    
    handleReset()
    handleClose()
    handleGetAllContacts()
  } catch (error) {
    console.error(error);
  }
}

useEffect(()=>{
  handleGetAllContacts()
},[])



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
        handleUserInput={handleUserInput}
        contact={contact}
        handleAddContact={handleAddContact}
        handleUpdateContact={handleUpdateContact}
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
              {contactList.length? (
                contactList
                  .map((contact, i) => {
                    const {
                      first_name,
                      last_name,
                      physical_address,
                      billing_address,
                      _id,
                    } = contact;
                    return (
                      <TableRow hover role="checkbox" key={i}>
                        <TableCell align="center" colSpan={2}>
                          {first_name}
                        </TableCell>
                        <TableCell align="center" colSpan={2}>
                          {last_name}
                        </TableCell>
                        <TableCell align="center" colSpan={3}>
                          {physical_address}
                        </TableCell>
                        <TableCell align="center" colSpan={3}>
                          {billing_address}
                        </TableCell>
                        <TableCell align="center" colSpan={2}>
                          <span>
                            <EditOutlinedIcon
                              style={{ color: "green" }}
                              onClick={() => handleOpenUpdateModal(_id)}
                            ></EditOutlinedIcon>
                          </span>
                          <span>
                            <DeleteOutlineOutlinedIcon
                              style={{ color: "red" }}
                              onClick={() => handleDeleteContact(_id)}
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
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          //   count={listOfContact.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
      </Paper>


    </div>
  );
};
export default Dashboard;