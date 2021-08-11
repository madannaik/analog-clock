import "styled-components";

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    .clock{
        background-color:${({ theme }) => theme.body};

    &__digi{
        color : ${({ theme }) => theme.text};
    }
    }


`;
