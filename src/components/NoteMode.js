import React from "react";

const NoteMode = ({ noteClick, noteMode }) => {
    return (
        <div
            onClick={() => noteClick()}
            style={{ cursor: 'pointer', fontWeight: noteMode ? 'bold' : '' }}
        >
            Заметка
        </div>
    )
}

export default NoteMode