import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import upload from '../../images/picture-front-color.png'
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css'


function ImageUpload(props) {
    const [next , setNext] =  useState(false)
    const [crop, setCrop] = useState({ aspect: 16 / 9 });
    const hiddenFileInput = React.useRef(null);
    const handleClick = (e) => {
        hiddenFileInput.current.click() ;
    }

    const handleChange = event => {
        props.setfileUpload(URL.createObjectURL(event.target.files[0]))
        
    };

    const nextchnage = ()=>{
        setNext(true)
        alert("dfgdfg")
    }
    

    return (
        <div>
            {props.fileUpload.length !== 0?<Modal closeButton  show={props.show} onHide={props.hide}>
                <h1 className='text-center font-semibold antialiased text-lg'>Crop<button onClick={nextchnage}
                   className='float-right text-sky-500 font-bold py-2 px-4 rounded ' >Next</button> <hr/></h1>
               
                <div className='grid justify-items-center'>
                <ReactCrop src={props.fileUpload} crop={crop} onChange={newCrop => setCrop(newCrop)} />
                </div>

               
            </Modal> : <Modal  show={props.show} onHide={props.hide} closeButton>
                <h1 className='text-center font-semibold antialiased text-lg'>Create new post <hr /></h1>
                <div className='grid justify-items-center mt-14'>
                    <img className='mb-3 w-24' src={upload} alt="" />
                    <h1 className='text-center text-lg antialiased font-light'>Drag photos and videos here </h1>
                </div>

                <div className='grid justify-items-center mt-4 mb-32'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleClick}>Select from computer</button>
                    <input type="file" ref={hiddenFileInput} onChange={handleChange} style={{ display: 'none' }} />
                </div>
            </Modal>}
            {next && <h1>fgdsfafds</h1>}
        </div>
    )
}

export default ImageUpload
