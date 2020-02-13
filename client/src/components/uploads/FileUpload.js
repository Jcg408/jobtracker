import React, { Fragment, useState } from 'react';
import Message from './Message';
import Progress from './Progress';
import axios from 'axios';

//state
const FileUpload = () => {
    const [file, setFile] = useState(' ');
    const [filename, setFilename] = useState('Choose File');
    const [uploaded, setUploaded] = useState({});
    const [message, setMessage] = useState('');
    const [uploadPercent, setUploadPercent] = useState(0);

    const handleChange = event => {
        setFile(event.target.files[0]);
        setFilename(event.target.files[0].name);
    };

    const handleSubmit = async event => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        try {
            const res = await axios.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                // set progress bar
                onUploadProgress: progressEvent => {
                    setUploadPercent( parseInt(Math.round((progressEvent.loaded * 100) /progressEvent.total)));
                    // clear percentage
                    setTimeout(() => setUploadPercent(0), 10000);
                }
            });
            const { fileName, filePath } = res.data;
            setUploaded({ fileName, filePath });

            setMessage('File Uploaded');
        } catch (err) {
            if (err.response.status === 500) {
                setMessage('Error with server');
            } else {
                setMessage(err.response.data.msg);
            }
        }
    };
    return (
        <Fragment>
            {message ? <Message msg={message} /> : null}
            <form onSubmit={handleSubmit}>
                <div className='custom-file mb-4'>
                    <input
                        type='file'
                        className='custom-file-input'
                        id='customFile'
                        onChange={handleChange}
                    />
                    <label className='custom-file-label' htmlFor='customFile'>
                        {filename}
                    </label>
                </div>
                <Progress percentage ={uploadPercent} />
                <input
                    type='submit'
                    value='Upload'
                    className='btn btn-primary btn-block mt-4'
                />
            </form>
            {uploaded ? (
                <div className='row mt-5'>
                    <div className='col-md-6 m-auto'>
                        <h3 className='text-center'> {uploaded.fileName}</h3>
                        <img
                            style={{ width: '70%' }}
                            src={uploaded.filePath}
                            alt=''
                        />
                    </div>
                </div>
            ) : null}
        </Fragment>
    );
};

export default FileUpload;
