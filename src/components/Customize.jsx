import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import data from '../data/products';

const Customize = () => {


    const { id: imageId } = useParams();
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedFileBack, setSelectedFileBack] = useState(null);
    const [shirtText, setShirtText] = useState("");
    const [shirtTextDuplicate, setShirtTextDuplicate] = useState("");

    const [fontSize, setFontSize] = useState(16);

    const handleFontSizeChange = (e) => {
        const newSize = e.target.value;
        setFontSize(newSize);
    };

    // draggable items

    const [isMouseDown, setIsMouseDown] = useState(false);
    const [initX, setInitX] = useState(0);
    const [initY, setInitY] = useState(0);
    const [cx, setCx] = useState(0);
    const [cy, setCy] = useState(0);

    const draggableRef = React.useRef(null);

    const handleMouseDown = (e) => {
        setIsMouseDown(true);
        document.body.classList.add('no-select');
        setInitX(e.clientX - draggableRef.current.offsetLeft);
        setInitY(e.clientY - draggableRef.current.offsetTop);
    };

    const handleMouseMove = (e) => {
        if (isMouseDown) {
            let newCx = e.clientX - initX;
            let newCy = e.clientY - initY;
            const width = draggableRef.current.offsetWidth;
            const height = draggableRef.current.offsetHeight;

            if (newCx < 0) {
                newCx = 0;
            }
            if (newCy < 0) {
                newCy = 0;
            }
            if (window.innerWidth - e.clientX + initX < width) {
                newCx = window.innerWidth - width;
            }
            if (e.clientY > window.innerHeight - height + initY) {
                newCy = window.innerHeight - height;
            }

            setCx(newCx);
            setCy(newCy);
        }
    };

    const handleMouseUp = () => {
        setIsMouseDown(false);
        document.body.classList.remove('no-select');
    };

    // draggable items end


    // draggable items

    const [isMouseDown1, setIsMouseDown1] = useState(false);
    const [initX1, setInitX1] = useState(0);
    const [initY1, setInitY1] = useState(0);
    const [cx1, setCx1] = useState(0);
    const [cy1, setCy1] = useState(0);

    const draggableRef1 = React.useRef(null);

    const handleMouseDown1 = (e) => {
        setIsMouseDown1(true);
        document.body.classList.add('no-select1');
        setInitX1(e.clientX - draggableRef1.current.offsetLeft);
        setInitY1(e.clientY - draggableRef1.current.offsetTop);
    };

    const handleMouseMove1 = (e) => {
        if (isMouseDown1) {
            let newCx1 = e.clientX - initX1;
            let newCy1 = e.clientY - initY1;
            const width1 = draggableRef1.current.offsetWidth;
            const height1 = draggableRef1.current.offsetHeight;

            if (newCx1 < 0) {
                newCx1 = 0;
            }
            if (newCy1 < 0) {
                newCy1 = 0;
            }
            if (window.innerWidth - e.clientX + initX1 < width1) {
                newCx1 = window.innerWidth - width1;
            }
            if (e.clientY1 > window.innerHeight - height1 + initY1) {
                newCy1 = window.innerHeight - height1;
            }

            setCx1(newCx1);
            setCy1(newCy1);
        }
    };

    const handleMouseUp1 = () => {
        setIsMouseDown1(false);
        document.body.classList.remove('no-select1');
    };

    // draggable items end 1


    // Files items
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const fileBack = event.target.files[1];
        setSelectedFile(file);
        setSelectedFileBack(fileBack);
    };

    const handleUpload = (e) => {
        e.preventDefault();
        if (selectedFile && selectedFileBack) {

            console.log('Uploading file:', selectedFile.name, selectedFileBack.name);
        } else {
            console.log('No file selected');
        }
    };

    const textChangeHandler = (e) => {
        setShirtText(e.target.value);
    }

    const textChangeHandler1 = (e) => {
        setShirtTextDuplicate(e.target.value);
    }


    const imageItem = data.find(item => item.id === parseInt(imageId));
    const imagItemBack = data.find(item => item.id === parseInt(imageId));
    const path = imageItem ? imageItem.image : '';
    const pathBack = imagItemBack ? imagItemBack.imageback : "";
    // Files items end.


    // use effects for image.
    useEffect(() => {
        return () => {
            // Clean up the temporary URL when the component unmounts
            if (selectedFile) {
                URL.revokeObjectURL(selectedFile);
            }
            if (selectedFileBack) {
                URL.revokeObjectURL(selectedFileBack);
            }
        };
    }, [selectedFile, selectedFileBack]);


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <Link className='btn btn-warning my-4' to="/">BACK</Link>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <div className="row">
                    <div className="col-md-4">
                        <div className="shirt-box mb-3">
                            <h2>Shirt Front</h2>
                            <div className="border w-100">
                                <img src={selectedFile ? URL.createObjectURL(selectedFile) : path} alt="" className="image" />
                            </div>
                            <div className="shirt_text">
                                <div
                                    id="draggable" class="no-select"
                                    ref={draggableRef}
                                    className="draggable-element"
                                    onMouseDown={handleMouseDown}
                                    onMouseMove={handleMouseMove}
                                    onMouseUp={handleMouseUp}
                                    style={{ left: cx + 'px', top: cy + 'px', position: 'absolute' }}
                                >

                                    <p style={{ fontSize: `${fontSize}px` }}>{shirtText}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="shirt-box mb-3">
                            <h2>Shirt Back</h2>
                            <div className="border w-100">
                                <img src={selectedFileBack ? URL.createObjectURL(selectedFileBack) : pathBack} alt="" className="image" />
                            </div>
                            <div className="shirt_text_1">
                                <div
                                    id="draggable1" class="no-select1"
                                    ref={draggableRef1}
                                    className="draggable-element1"
                                    onMouseDown={handleMouseDown1}
                                    onMouseMove={handleMouseMove1}
                                    onMouseUp={handleMouseUp1}
                                    style={{ left: cx1 + 'px', top: cy1 + 'px', position: 'absolute' }}
                                >
                                    {shirtTextDuplicate}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="customization mb-3">
                            <h2>Customization Toolbox</h2>
                            <div>
                                <form action="">
                                    <label htmlFor="" className="mb-1">Upload Image</label>
                                    <input type="file" name="" id="" accept="image/*" className="form-control mb-3" onChange={handleFileChange} />
                                    <button onClick={handleUpload} className="btn btn-primary mb-3">Upload</button><br />
                                    <label htmlFor="" className="mb-1">Front Name</label>
                                    <input type="text" className="form-control" placeholder="Enter Shirt Front Name" onChange={textChangeHandler} minLength={0} maxLength={10} min={0} max={10} />
                                    <label htmlFor="" className="mb-1">Back Name</label>
                                    <input type="text" className="form-control" placeholder="Enter Shirt Back Name" onChange={textChangeHandler1} minLength={0} maxLength={10} min={0} max={10} />

                                    <label htmlFor="font-size" className='mt-3 bold' >Font Size:</label>
                                    <input
                                        type="range"
                                        id="font-size"
                                        name="font-size"
                                        min="10"
                                        max="36"
                                        step="1"
                                        value={fontSize}
                                        onChange={handleFontSizeChange}
                                        className='form-control'
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Customize;