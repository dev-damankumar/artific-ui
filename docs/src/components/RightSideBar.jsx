import React from 'react'
import { NavLink } from 'react-router-dom'
import docs from '../docs.jsx'
import { ThemeProvider } from 'artific-ui'
import theme from '../theme.js'

const RightSidebar = props => {
    const toggleMenus = (e, id) => {
        const menu = document.querySelector(`#${id}`)
        if (menu) {
            const height = menu.scrollHeight
            menu.classList.toggle('open-menu')
            if (menu.classList.contains('open-menu')) {
                menu.style.height = `${height}px`
            } else {
                menu.style.height = `0`
            }
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <div className="right-sidebar sidebar">
                <div className="side-menu">
                    <NavLink
                        className={classData => {
                            return `${
                                classData.isActive ? 'is-active' : ''
                            } sidebar-link`
                        }}
                        to="/get-started"
                    >
                        <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#000000"
                        >
                            <path
                                d="M6 6h12M6 10h12M13 14h5M13 18h5M2 21.4V2.6a.6.6 0 01.6-.6h18.8a.6.6 0 01.6.6v18.8a.6.6 0 01-.6.6H2.6a.6.6 0 01-.6-.6z"
                                stroke="#000000"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M6 18v-4h3v4H6z"
                                stroke="#000000"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                        Getting Started
                    </NavLink>
                    <NavLink className="sidebar-link " to="/installation">
                        <svg
                            width="24px"
                            height="24px"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#000000"
                        >
                            <path
                                d="M13.992 17h3m3 0h-3m0 0v-3m0 3v3"
                                stroke="#000000"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M4 9.4V4.6a.6.6 0 01.6-.6h4.8a.6.6 0 01.6.6v4.8a.6.6 0 01-.6.6H4.6a.6.6 0 01-.6-.6zM4 19.4v-4.8a.6.6 0 01.6-.6h4.8a.6.6 0 01.6.6v4.8a.6.6 0 01-.6.6H4.6a.6.6 0 01-.6-.6zM14 9.4V4.6a.6.6 0 01.6-.6h4.8a.6.6 0 01.6.6v4.8a.6.6 0 01-.6.6h-4.8a.6.6 0 01-.6-.6z"
                                stroke="#000000"
                                strokeWidth="1.5"
                            ></path>
                        </svg>
                        Install
                    </NavLink>
                    <NavLink className="sidebar-link " href="#">
                        <svg
                            width="24px"
                            height="24px"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#000000"
                        >
                            <path
                                d="M13.992 17h3m3 0h-3m0 0v-3m0 3v3"
                                stroke="#000000"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M4 9.4V4.6a.6.6 0 01.6-.6h4.8a.6.6 0 01.6.6v4.8a.6.6 0 01-.6.6H4.6a.6.6 0 01-.6-.6zM4 19.4v-4.8a.6.6 0 01.6-.6h4.8a.6.6 0 01.6.6v4.8a.6.6 0 01-.6.6H4.6a.6.6 0 01-.6-.6zM14 9.4V4.6a.6.6 0 01.6-.6h4.8a.6.6 0 01.6.6v4.8a.6.6 0 01-.6.6h-4.8a.6.6 0 01-.6-.6z"
                                stroke="#000000"
                                strokeWidth="1.5"
                            ></path>
                        </svg>
                        Layout
                    </NavLink>

                    <a
                        onClick={e => {
                            toggleMenus(e, 'components1')
                        }}
                        className="sidebar-link menu"
                        href="#"
                    >
                        <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#000000"
                        >
                            <path
                                d="M12 23a1 1 0 100-2 1 1 0 000 2zM3 8a1 1 0 100-2 1 1 0 000 2zM3 18a1 1 0 100-2 1 1 0 000 2z"
                                fill="#000000"
                                stroke="#000000"
                                strokeWidth="1.5"
                                strokeLinecap="var(--stroke-line-cap)"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M21 7.353v9.294a.6.6 0 01-.309.525l-8.4 4.666a.6.6 0 01-.582 0l-8.4-4.666A.6.6 0 013 16.647V7.353a.6.6 0 01.309-.524l8.4-4.667a.6.6 0 01.582 0l8.4 4.667a.6.6 0 01.309.524z"
                                stroke="#000000"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M3.528 7.294l8.18 4.544a.6.6 0 00.583 0l8.209-4.56M12 21v-9"
                                stroke="#000000"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                        Components
                        <div className="arrow-wrap">
                            <i className="bx bx-chevron-right"></i>
                        </div>
                    </a>
                    <div id="components1" className="side-menu nested">
                        {docs.map((doc, index) => {
                            return (
                                <NavLink
                                    key={`id-${doc.path}-${index}`}
                                    className={classData => {
                                        return `${
                                            classData.isActive
                                                ? 'is-active'
                                                : ''
                                        } sidebar-link`
                                    }}
                                    to={doc.path}
                                >
                                    {doc.name}
                                </NavLink>
                            )
                        })}
                    </div>
                    <a className="sidebar-link menu" href="#">
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
                                d="M20.51 9.54a1.899 1.899 0 01-1 1.09A7 7 0 0015.37 17c.001.47.048.939.14 1.4a2.16 2.16 0 01-.31 1.65 1.79 1.79 0 01-1.21.8 9 9 0 01-10.62-9.13A9.05 9.05 0 0111.85 3h.51a9 9 0 018.06 5 2 2 0 01.09 1.52v.02z"
                                stroke="#000000"
                                strokeWidth="1.5"
                            ></path>
                            <path
                                d="M8 16.01l.01-.011M6 12.01l.01-.011M8 8.01l.01-.011M12 6.01l.01-.011M16 8.01l.01-.011"
                                stroke="#000000"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                        Customization
                        <div className="arrow-wrap">
                            <i className="bx bx-chevron-right"></i>
                        </div>
                    </a>
                    <div className="side-menu nested">
                        <a className="sidebar-link is-active" href="#">
                            Getting Started
                        </a>
                        <a className="sidebar-link trending menu" href="#">
                            Components
                        </a>
                        <a className="sidebar-link" href="#">
                            Customization
                        </a>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default RightSidebar
