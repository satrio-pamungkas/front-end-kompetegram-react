import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';
import Link from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '400px',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 8,
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
        <div>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <Button 
                    className="button-modal"
                    onClick={handleOpen}
                    variant="outlined"
                    color="warning"
                    >Tools-tools yang akan digunakan
                </Button>
                <Link underline="none" href="https://forms.gle/hg8HURnW3V3XWufA9" target="_blank" rel="noopener noreferrer">
                    <Button 
                        className="button-modal"
                        variant="outlined"
                        color="warning"
                        >Link Alternatif Pendaftaran
                    </Button>
                </Link>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography>
                    Tools dan <i>framework</i> yang akan digunakan :
                </Typography>
                <br/>
                <Alert variant="outlined" color="warning">Codeigniter 3.1.11</Alert>
                <Alert style={{ marginTop: '20px'}} variant="outlined" color="warning">Text Editor (VSCode atau lainnya)</Alert>
                <Alert style={{ marginTop: '20px'}} variant="outlined" color="warning">XAMPP</Alert>
                <Alert style={{ marginTop: '20px'}} variant="outlined" color="warning">Postman</Alert>
            </Box>
            </Modal>
        </div>
    );
  }