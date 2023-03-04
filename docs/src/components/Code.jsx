import React, {useEffect, useState} from 'react'
import '../assets/prism.css'
import '../index.css'
import {IconButton, Tooltip, Typography} from 'artific-ui'
import Prism from 'prismjs'

const Code = ({children, lang = 'html', openCode, setOpenCode}) => {
    const [copyDone, setCopyStatus] = useState(false)
    useEffect(() => {
        Prism.highlightAll()
    }, [children])

    function fallbackCopyTextToClipboard(text) {
        const textArea = document.createElement("textarea");
        textArea.value = text;

        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            document.execCommand('copy');
            setCopyStatus(true)
            setTimeout(() => {
                setCopyStatus(false)
            }, 3000)
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }

        document.body.removeChild(textArea);
    }

    function copyTextToClipboard(text) {
        if (!copyDone) {
            if (!navigator.clipboard) {
                fallbackCopyTextToClipboard(text);
                return;
            }
            navigator.clipboard.writeText(text).then(function () {
                setCopyStatus(true)
                setTimeout(() => {
                    setCopyStatus(false)
                }, 3000)
            }, function (err) {
                console.error('Async: Could not copy text: ', err);
            });
        }
    }

    return (
        <div className="code-div dark-mode-code">
            <div className="code-block-actions">
                <IconButton
                    className={`copy-btn`}
                    layout="rounded"
                    variant="text"
                    size="sm"
                    theme="light"
                    onClick={() => {
                        setOpenCode(false)
                    }}
                >
                    <i className='bx bx-collapse'></i>
                </IconButton>
                <Tooltip
                    placement="top"
                    theme="light"
                    variant="arrow"
                    title="Copy code"
                >
                    <IconButton
                        className={`copy-btn ${copyDone ? 'copy-success' : ''}`}
                        layout="rounded"
                        variant="text"
                        size="sm"
                        theme="light"
                        onClick={() => {
                            copyTextToClipboard(children.toString())
                        }}
                    >
                        {copyDone ? <i className="bx bx-check"></i>
                            : <i className="bx bx-copy"></i>
                        }
                    </IconButton>
                </Tooltip>
            </div>
            <Typography variant="pre" className="pre">
                <Typography variant="code" className={`language-${lang}`}>
                    {children.toString().trim()}
                </Typography>
            </Typography>
        </div>
    )
}

export default Code
