import React from "react";
import type { AnyChildren } from "../../../types/AnyChildren";

interface HeaderButtonProps extends AnyChildren {
    ariaLabel?: string
}

const HeaderAction: React.FC<Partial<HeaderButtonProps>> =  (props) => {
    return (
        <button 
            tabIndex={0}
            aria-label={props.ariaLabel}
            className="header-action"
        >
            {props.children}
        </button>
    );
}
export default HeaderAction;