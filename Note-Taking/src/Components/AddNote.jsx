import React, { useState } from "react";
import "../App.css";

function AddNote({setNotes}) {
    const [addClick, setAddClick] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    
    const handleAddClick = () => {
        setAddClick(true);
    };

    const handleBackBtn = () => {
        setAddClick(false);
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleNoteChange = (e) => {
        setContent(e.target.value);
    };

    const handleDoneClick = () => {
        setNotes((prevData) => {
          return  [...prevData, {title, content}];
        });
        setAddClick(false);
        setTitle("");
        setContent("");
    }
    
    return (
        <>
        {addClick ? (
            <div className="addNotesDiv">
                <div className="addNotesDiv_top">
                    <span className="material-symbols-outlined" onClick={handleBackBtn}>
                        arrow_back
                    </span>
                    <h3>Edit Note</h3>
                    <span className="material-symbols-outlined" onClick={handleDoneClick}>
                        check
                    </span>
                </div>
                <input
                    type="text"
                    className="noteTitle"
                    placeholder="Enter title"
                    value={title}
                    onChange={handleTitleChange}
                />
                <textarea
                    className="noteContent"
                    placeholder="Enter note content"
                    value={content}
                    onChange={handleNoteChange}
                />
            </div>
        ) : (
            <div className="addNote">
                <span className="material-symbols-outlined" onClick={handleAddClick}>add</span>
            </div>
        )}
        </>
    );
}

export default AddNote;
