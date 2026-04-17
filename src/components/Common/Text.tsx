import React, { type JSX } from 'react';
import type { TextStyle } from '../theme/theme';

export interface TextProps<T extends keyof JSX.IntrinsicElements = "span"> {
    children: React.ReactNode;
    font?: Partial<TextStyle>;
    style?: React.CSSProperties;
    className?: string;
    id?: string
    as?: T
}

const Text = <T extends keyof JSX.IntrinsicElements = "span">(props: TextProps<T>) => {
    const Component = props.as || "span";
    return (
        <Component 
            className={props.className} 
            id={props.id}
            style={{
                fontSize: props.font?.fontSize,
                fontWeight: props.font?.fontWeight,
                fontFamily: props.font?.fontFamily,
                ...props.style,
            }}>
            {props.children}
        </Component>
    );
}

export default Text;