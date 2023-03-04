import React, { useContext } from 'react'
import { IconButton } from 'artific-ui'
import { AppContext } from '../App.jsx'

const ThemeMode = () => {
    const context = useContext(AppContext)
    return (
        <IconButton
            onClick={() => {
                context.setMode(context.mode === 'light' ? 'dark' : 'light')
            }}
            className="icon-btn"
            variant="text"
            layout="rounded"
        >
            {context.mode === 'light' ? (
                <svg
                    width="30px"
                    height="30px"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="#000000"
                >
                    <path
                        d="M12 18a6 6 0 100-12 6 6 0 000 12zM22 12h1M12 2V1M12 23v-1M20 20l-1-1M20 4l-1 1M4 20l1-1M4 4l1 1M1 12h1"
                        stroke="#000000"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </svg>
            ) : (
                <svg
                    width="30px"
                    height="30px"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="#000000"
                >
                    <path
                        d="M3 11.507a9.493 9.493 0 0018 4.219c-8.507 0-12.726-4.22-12.726-12.726A9.494 9.494 0 003 11.507z"
                        stroke="#000000"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </svg>
            )}
        </IconButton>
    )
}

export default ThemeMode
