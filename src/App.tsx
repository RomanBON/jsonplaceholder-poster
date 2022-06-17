import React from "react";
import { createGlobalStyle } from "styled-components";

import { Main } from "~/pages";

const StyledApp = createGlobalStyle`
    * {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
    }
`;

function App() {
    return (
        <>
            <StyledApp />
            <Main />
        </>
    );
}

export default App;
