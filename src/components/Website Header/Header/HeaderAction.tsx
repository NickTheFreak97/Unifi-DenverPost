import React from "react";
import { styled } from  'styled-components'

import { useTheme } from "../../../components/theme/theme";
import type { AnyChildren } from "../../../types/AnyChildren";


const HeaderButton = styled.button<{ $basecolor: string, $hovercolor: string }>`
    background-color: ${(props) => props.$basecolor};
    color: white;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 115px;
    height: 45px;
    border-radius: 5px;
    border-color: transparent;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => props.$hovercolor};
        text-decoration: underline;
    }
`;

interface HeaderButtonProps extends AnyChildren {
    ariaLabel?: string
}

const HeaderAction: React.FC<Partial<HeaderButtonProps>> =  (props) => {
    const theme = useTheme();

    return (
        <HeaderButton 
            $basecolor={theme.color.primary} 
            $hovercolor={theme.color.primaryActive}
            tabIndex={0}
            aria-label={props.ariaLabel}
        >
            {props.children}
        </HeaderButton>
    );
}
export default HeaderAction;