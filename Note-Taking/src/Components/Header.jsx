import React, { useState } from "react";
import "../App.css";
import AddNote from "./AddNote";
import ShowNotes from "./ShowNotes";

function Header() {
    const [searchClick, setSearchClick] = useState(false);
    const [searchNote, setSearchNote] = useState("");

    const handleSearchClick = () => {
        setSearchClick(true);
    };

    const handleSearchNote = (e) => {
        setSearchNote(e.target.value);
    };

    return (
        <>
            {!searchClick ? (
                <div className="header_div">
                    <span className="material-symbols-outlined">menu</span>
                    <h4>Recents Note</h4>
                    <span
                        className="material-symbols-outlined"
                        onClick={handleSearchClick} value={searchNote}
                   placeholder="Search notes...." >
                        search
                    </span>
                </div>
            ) : (
                <>
                <div className="searchInput">
                    <input type="text" onChange={handleSearchNote} />
                    <span className="material-symbols-outlined">search</span>
                </div>
                <AddNote searchNote={searchNote} />
                </>
            )}
        </>
    );
}

export default Header;
