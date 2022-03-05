import React from 'react'

function Side({
    notes,
    onAddNote,
    onDeleteNote,
    active,
    setActive
}){ 

    const sotrNotes = notes.sort((a,b) => b.lastmodified - a.lastmodified);

    return (
        <>
            <div className='app-sidebar'>
                <div className='app-sidebar-header'>
                    <h1>Notes</h1>
                    <button onClick={onAddNote}>Add</button>
                </div>
                <div className='app-sidebar-notes'>
                    {
                        sotrNotes.map((notes) => (
                            <div
                            className={`app-sidebar-note ${notes.id === active && "active"}`}
                            onClick={() => setActive(notes.id)}
                            >
                                <div className='sidebar-note-title'>
                                    <strong>{notes.title}</strong>
                                    <button onClick={() => onDeleteNote(notes.id)}>Delete</button>
                                </div>
                                <p>{notes.body && notes.body.substr(0, 30) + '...'}</p>
                                <small className='note-meta'>Last modified {" "}
                                    {new Date(notes.lastmodified).toLocaleDateString('en-GB', {
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })}
                                </small>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Side
