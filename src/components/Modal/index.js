import React, { useState } from 'react';
import { Modal, Box } from '@mui/material';

export default function Index({ handleOpen, content }) {
    const [open, setOpen] = useState(handleOpen);

    // const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '70%',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    {content}
                </Box>
            </Modal>
        </div>
    )
}
