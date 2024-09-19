import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//toast type : info , success, warning, error

const Toast = () => {
    return (
        <div>            
            <ToastContainer
                position="bottom-right"
            />
        </div>
    );
}

export default Toast