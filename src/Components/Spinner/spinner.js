import React, { useState } from "react";

const Spinner = () =>{
    const [show, setShow] = useState(true);

    const spinnerClose = () =>{
        setTimeout(function () {
            
            setShow(false)
        }, 1);
    };
    

    return (
        <>
            <div id="spinner" className={show ? 'show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center' : 'bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center'}>
                <div className="spinner-grow text-success m-1" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-dark m-1" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-secondary m-1" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                {spinnerClose()}
            </div>
        </>
    )
}

export default Spinner;