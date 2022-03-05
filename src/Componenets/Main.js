import React from 'react'
import ReactMarkdown from 'react-markdown'

function Main({ active, onUpdataNote }) {

    const onEditeField = (key, value) => {
        onUpdataNote({
            ...active,
            [key]: value,
            lastmodified: Date.now()
        });
    }

    if (!active) return <div className='no-active-note'>No Note Selected</div>

    return (
        <>
            <div className='app-main'>
                <div className='app-main-note-edit'>
                    <input
                        type='text'
                        value={active.title}
                        id='title'
                        autoFocus
                        onChange={(e) => onEditeField("title", e.target.value)}
                    />
                    <textarea
                        id='body'
                        value={active.body}
                        onChange={(e) => onEditeField("body", e.target.value)}
                    />
                </div>
                <div className='app-main-note-preview'>
                    <h1 className='preview-title'>{active.title}</h1>
                    <ReactMarkdown className='markdown-preview'>{active.body}</ReactMarkdown>
                </div>
            </div>
        </>
    )
}

export default Main
