import React, { useEffect, useState } from 'react'
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';

function Discard(props) {

    useEffect(() => {


    }, [])


    const handleClose = () => {
        props.setState(false)
    }

    const [show, setShow] = useState(true);
    const handleCloseMain = () => {
        setShow(false);
        props.setState(false)
        props.setfileUpload('')
        props.setshowOne(false)
    }
    const handleCloseOne = () => {
        setShow(false);
        props.setState(false)
    }

    // handleShow()
    return (
        <div>
            <Modal className='mt-32 ' closeButton show={props.setState} onHide={handleClose}>
                <h1 className='text-center font-semibold antialiased text-lg'>Discard post?</h1>
                <div>
                    <h1 className='text-center font-light antialiased text-lg'>If you leave, your edits won't be saved.</h1>
                </div>
                <div className='flex justify-center' >
                    <div className='display: inline-block'>
                        <div>
                            <button className='font-bold text-red-600 ' onClick={handleCloseMain}>
                                Disacard
                            </button>
                        </div>
                        <hr />
                        <div>
                            <button className='font-medium text-sm ml-3.5 mb-6' onClick={handleCloseOne}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Discard
