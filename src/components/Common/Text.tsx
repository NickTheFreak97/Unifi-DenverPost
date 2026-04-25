import React, { type JSX } from 'react';
import type { TextStyle } from '../theme/theme';

export type TextProps<T extends keyof JSX.IntrinsicElements = "span"> = {
    font?: Partial<TextStyle>;
    as?: T;
} & React.ComponentPropsWithoutRef<T>;


const Text = <T extends keyof JSX.IntrinsicElements = "span">({
    as,
    font,
    style,
    children,
    ...rest
}: TextProps<T>) => {
    const Component = (as ?? "span") as React.ElementType;
    return (
        <Component
            style={{
                fontSize: font?.fontSize,
                fontWeight: font?.fontWeight,
                fontFamily: font?.fontFamily,
                ...style,
            }}
            {...rest}
        >
            { children }
        </Component>
    );
};

export default Text;