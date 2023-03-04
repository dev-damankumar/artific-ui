import React, { createContext, useEffect, useRef, useState } from 'react'
import './index.css'
import Sidebar from './components/Sidebar.jsx'
import Header from './components/Header.jsx'
import { Col, Container, Row } from 'artific-ui'
import RightSidebar from './components/RightSideBar'
import Main from './components/Main.jsx'

export const AppContext = createContext({
    mode: 'light',
})

function App() {
    const localMode = localStorage.getItem('themeMode') || 'light'
    const [openLeftSidebar, setOpenLeftSidebar] = useState(false)
    const [progress, setProgress] = useState(0)
    const scrollRef = useRef(null)
    const [mode, setMode] = useState(localMode)
    const toggleSidebar = () => {
        setOpenLeftSidebar(!openLeftSidebar)
    }
    const toggleThemeMode = mode => {
        localStorage.setItem('themeMode', mode)
        setMode(mode)
    }
    const closeSidebar = () => {
        setOpenLeftSidebar(false)
    }
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.addEventListener('scroll', e => {
                const totalScroll = scrollRef.current.scrollHeight
                const currentScroll = scrollRef.current.scrollTop
                const pageScrolledPercentAge = Math.trunc(
                    (currentScroll /
                        (totalScroll - scrollRef.current.offsetHeight)) *
                        100,
                )
                setProgress(pageScrolledPercentAge)
            })
        }
    }, [])
    return (
        <AppContext.Provider
            value={{ mode: mode, setMode: toggleThemeMode, progress: progress }}
        >
            <div
                className={`container-div ${
                    mode === 'dark' ? 'dark-mode-wrapper' : ''
                }`}
            >
                <Sidebar
                    closeSidebar={closeSidebar}
                    openLeftSidebar={openLeftSidebar}
                />
                <div ref={scrollRef} className="wrapper">
                    <Header toggleSidebar={toggleSidebar} />
                    <Container fluid>
                        <Row>
                            <Col col={9} className="main-column">
                                <Main />
                            </Col>
                            <Col col={3} className="right-column">
                                <RightSidebar />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </AppContext.Provider>
    )
}

export default App
