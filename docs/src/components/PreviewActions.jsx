import React from 'react';
import {ButtonGroup, IconButton, ThemeProvider} from "artific-ui";
import theme from "../theme.js";

const PreviewActions = ({openCode, setOpenCode}) => {
    return (
        <ThemeProvider theme={theme}>
            {!openCode &&
                <div className="preview-actions">
                    <ButtonGroup size="sm">

                        <IconButton elevation={false} onClick={() => {
                            setOpenCode(true)
                        }} theme="light" layout="rounded"><i className='bx bx-code-alt'></i></IconButton>

                    </ButtonGroup>
                </div>
            }
        </ThemeProvider>
    );
};

export default PreviewActions;