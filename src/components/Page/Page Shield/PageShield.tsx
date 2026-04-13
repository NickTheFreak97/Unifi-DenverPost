import React from "react";
import type { AnyChildren } from "../../../types/AnyChildren";
import './pageshield.css';

type PageShieldProps = React.PropsWithChildren & React.ComponentPropsWithoutRef<'main'> & AnyChildren;

const PageShield: React.FC<PageShieldProps> = ( props ) => {
    const { children, ...rest } = props;

    return (
        <main id="page-shield" {...rest}>
            {children}
        </main>
    );
};

export default PageShield;