import React from 'react';
import type { TextStyle } from '../theme/theme';

export interface TextProps {
    children: React.ReactNode;
    font?: Partial<TextStyle>;
    style?: React.CSSProperties;
    className?: string;
    id?: string
}

const Text = (props: TextProps) => {
    return (
        <span 
            className={props.className} 
            id={props.id}
            style={{
                ...props.style,
                fontSize: props.font?.fontSize,
                fontWeight: props.font?.fontWeight,
                fontFamily: props.font?.fontFamily,
            }}>
            {props.children}
        </span>
    );
}

export default Text;