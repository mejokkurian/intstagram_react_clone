import React from 'react';

function ImagePoting() {
    return <div>
        <Modal closeButton show={props.show} onHide={props.hide}>
            <h1 className='text-center font-semibold antialiased text-lg'>Crop<button className='float-right text-sky-500 font-bold py-2 px-4 rounded ' onClick={handleClick}>Next</button> <hr /></h1>

            <div className='grid justify-items-center'>
                <ReactCrop src={props.fileUpload} crop={crop} onChange={newCrop => setCrop(newCrop)} />
            </div>
        </Modal>
    </div>;
}

export default ImagePoting;
