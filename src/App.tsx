import React from "react";
import { createGlobalStyle } from "styled-components";

import { Main } from "~/components";

const StyledApp = createGlobalStyle`
    * {
        font-family: 'Roboto', sans-serif;
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
