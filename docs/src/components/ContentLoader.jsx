import React from 'react'
import { Space } from '../../../src/index'

const ContentLoader = () => {
    return (
        <Space gap={15}>
            <div className="main-blog anim">
                <div className="main-blog__title loading">
                    Lorem ipsum dolor sit amet.
                </div>
                <div className="main-blog__author">
                    <div className="author-img__wrapper">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={3}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-check"
                        >
                            <path d="M20 6L9 17l-5-5" />
                        </svg>
                        <div
                            className="loading loading-img loading-rounded"
                            style={{ width: 42, height: 42 }}
                        ></div>
                    </div>
                    <div>
                        <div className="author-detail loading loading-sm">
                            <div className="author-name">Daman Kumar</div>
                            <div className="author-info ">
                                53K views <span className="seperate" />2 weeks
                                ago
                            </div>
                        </div>
                        <br />
                        <div className="author-detail loading loading-sm">
                            <div className="author-name">Daman Kumar</div>
                            <div className="author-info ">
                                53K views <span className="seperate" />2 weeks
                                ago
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-blog__time loading">7 min</div>
            </div>
            <h2 className="loading">Lorem ipsum dolor sit amet</h2>
            <p className="loading loading-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
                quia.
            </p>
            <p className="loading loading-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aspernatur doloribus ea iure minima, nobis optio! Aspernatur
                doloremque dolorum fugiat maiores.
            </p>
            <p className="loading loading-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aspernatur doloribus ea iure minima, nobis optio! Aspernatur
                doloremque dolorum fugiat maiores.
            </p>
            <p className="loading loading-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aspernatur doloribus ea iure minima, nobis optio! Aspernatur
                doloremque dolorum fugiat maiores.
            </p>
            <p className="loading loading-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aspernatur doloribus ea iure minima, nobis optio! Aspernatur
                doloremque dolorum fugiat maiores.
            </p>
        </Space>
    )
}

export default ContentLoader
