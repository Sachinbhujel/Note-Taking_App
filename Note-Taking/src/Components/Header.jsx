import React from 'react';
import '../App.css'

function Header(){
    return (
        <>
            <div className='header_div'>
            <span class="material-symbols-outlined">
                menu
            </span>
            <h4>Recents Note</h4>
            <span class="material-symbols-outlined">
                search
            </span>
            </div>
        </>
    )
}

export default Header;