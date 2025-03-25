import React from "react";
import "../App.css";

function ShowNotes({ notes }) {
    const getRandomLightColor = () => {
        const r = Math.floor(Math.random() * 156) + 100;
        const g = Math.floor(Math.random() * 156) + 100;
        const b = Math.floor(Math.random() * 156) + 100;
        return `rgb(${r}, ${g}, ${b})`;
    };

    return (
        <>
            {notes.length > 0 ? (
                <div className="showNotesDiv">
                    {notes.map((note, index) => (
                        <div
                            key={index}
                            className={
                                note.title.length <= 6 &&
                                note.content.length <= 20
                                    ? "defaultNotes"
                                    : "showNotes"
                            }
                            style={{ backgroundColor: getRandomLightColor() }}
                        >
                            <div className="note_features">
                                <span class="material-symbols-outlined">
                                    palette
                                </span>
                                <span class="material-symbols-outlined">
                                    delete
                                </span>
                            </div>
                            <h3>{note.title}</h3>
                            <p>{note.content}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="noAvailableNotes">No notes available</p>
            )}
        </>
    );
}

export default ShowNotes;
