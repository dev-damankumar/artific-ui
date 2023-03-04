import React, {useState} from 'react';
import Code from "./Code.jsx";
import PreviewActions from "./PreviewActions.jsx";

const ComponentPreview = ({children, code}) => {
    const [openCode, setOpenCode] = useState(false)
    return (
        <div className="wrap">
            <PreviewActions openCode={openCode} setOpenCode={setOpenCode}/>
            {children}
            {openCode && <Code openCode={openCode} setOpenCode={setOpenCode}>
                {code.toString().trim()}
            </Code>}

        </div>
    );
};

export default ComponentPreview;