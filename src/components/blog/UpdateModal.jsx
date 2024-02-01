import * as React from 'react';
import Box from '@mui/material/Box';
import NewBlog from "../../pages/NewBlog"
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "90%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};

const UpdateModal = ({open,handleClose})=> {
 

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <NewBlog />
        </Box>
      </Modal>
    </div>
  );
}
export default UpdateModal;