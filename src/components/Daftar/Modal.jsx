import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
        <div>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <Button 
                    onClick={handleOpen}
                    variant="outlined"
                    color="warning"
                    >Lihat Syarat dan Ketentuan
                </Button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography>
                    Syarat dan ketentuan menjadi anggota KOMPETEGRAM :
                </Typography>
                <Alert variant="outlined" color="warning">Memiliki niat dan semangat</Alert>
                <Alert variant="outlined" color="warning">Mahasiswa aktif UPI</Alert>
            </Box>
            </Modal>
        </div>
    );
  }