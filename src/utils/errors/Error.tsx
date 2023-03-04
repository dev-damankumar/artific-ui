import React from 'react'

const ErrorMessage: React.FC<{ children: React.ReactNode }> = ({
                                                                   children,
                                                               }) => {
    return (
        <div
            style={{
                color: 'white',
                background: 'red',
                padding: ' 6px 8px',
                fontSize: '13px',
                borderRadius: '5px',
            }}
        >
            {children}
        </div>
    )
}

export default ErrorMessage
